<script lang="ts">
	import type { WedgeType } from '$lib/types';

	interface Props {
		width?: number;
		height?: number;
		disabled?: boolean;
		showGrid?: boolean;
		onStrokeComplete?: (strokes: Array<{ points: Array<{ x: number; y: number }> }>) => void;
	}

	let {
		width = 400,
		height = 300,
		disabled = false,
		showGrid = true,
		onStrokeComplete
	}: Props = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = $state(null);
	let isDrawing = $state(false);
	let currentStroke = $state<Array<{ x: number; y: number }>>([]);
	let allStrokes = $state<Array<Array<{ x: number; y: number }>>>([]);

	$effect(() => {
		if (canvas) {
			ctx = canvas.getContext('2d');
			redraw();
		}
	});

	function getPosition(event: MouseEvent | TouchEvent): { x: number; y: number } {
		const rect = canvas.getBoundingClientRect();
		let clientX: number, clientY: number;

		if ('touches' in event && event.touches.length > 0) {
			clientX = event.touches[0].clientX;
			clientY = event.touches[0].clientY;
		} else if ('clientX' in event) {
			clientX = event.clientX;
			clientY = event.clientY;
		} else {
			return { x: 0, y: 0 };
		}

		const scaleX = canvas.width / rect.width;
		const scaleY = canvas.height / rect.height;

		return {
			x: (clientX - rect.left) * scaleX,
			y: (clientY - rect.top) * scaleY
		};
	}

	function handlePointerDown(event: MouseEvent | TouchEvent) {
		if (disabled) return;
		event.preventDefault();
		isDrawing = true;
		const pos = getPosition(event);
		currentStroke = [pos];
	}

	function handlePointerMove(event: MouseEvent | TouchEvent) {
		if (!isDrawing || disabled) return;
		event.preventDefault();
		const pos = getPosition(event);
		currentStroke = [...currentStroke, pos];
		redraw();
	}

	function handlePointerUp() {
		if (!isDrawing) return;
		isDrawing = false;

		if (currentStroke.length > 2) {
			allStrokes = [...allStrokes, currentStroke];
			onStrokeComplete?.([...allStrokes].map(s => ({ points: s })));
		}
		currentStroke = [];
		redraw();
	}

	function redraw() {
		if (!ctx) return;

		// Clear canvas
		ctx.fillStyle = '#e8dbc4'; // clay-200
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Draw grid
		if (showGrid) {
			ctx.strokeStyle = '#d4c4a0'; // clay-300
			ctx.lineWidth = 1;
			const gridSize = 40;

			for (let x = gridSize; x < canvas.width; x += gridSize) {
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, canvas.height);
				ctx.stroke();
			}

			for (let y = gridSize; y < canvas.height; y += gridSize) {
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(canvas.width, y);
				ctx.stroke();
			}
		}

		// Draw completed strokes
		for (const stroke of allStrokes) {
			drawWedgeStroke(stroke);
		}

		// Draw current stroke
		if (currentStroke.length > 0) {
			drawWedgeStroke(currentStroke);
		}
	}

	function drawWedgeStroke(points: Array<{ x: number; y: number }>) {
		if (!ctx || points.length < 2) return;

		// Calculate stroke direction
		const start = points[0];
		const end = points[points.length - 1];
		const dx = end.x - start.x;
		const dy = end.y - start.y;
		const length = Math.sqrt(dx * dx + dy * dy);

		if (length < 5) return;

		// Normalize direction
		const nx = dx / length;
		const ny = dy / length;

		// Perpendicular for width
		const px = -ny;
		const py = nx;

		// Wedge shape: wide at head (start), narrow at tail (end)
		const headWidth = 12;
		const tailWidth = 2;

		ctx.beginPath();
		ctx.fillStyle = '#3d2e0a'; // clay-800

		// Draw wedge shape
		ctx.moveTo(start.x + px * headWidth, start.y + py * headWidth);
		ctx.lineTo(start.x - px * headWidth, start.y - py * headWidth);
		ctx.lineTo(end.x - px * tailWidth, end.y - py * tailWidth);
		ctx.lineTo(end.x + px * tailWidth, end.y + py * tailWidth);
		ctx.closePath();
		ctx.fill();

		// Add slight emboss effect
		ctx.strokeStyle = 'rgba(0,0,0,0.2)';
		ctx.lineWidth = 1;
		ctx.stroke();
	}

	export function clear() {
		allStrokes = [];
		currentStroke = [];
		redraw();
		onStrokeComplete?.([]);
	}

	export function getStrokes() {
		return allStrokes;
	}
</script>

<div class="relative w-full" style="max-width: {width}px;">
	<canvas
		bind:this={canvas}
		{width}
		{height}
		class="w-full rounded-lg border-2 border-clay-300 touch-none {disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-crosshair'}"
		style="aspect-ratio: {width}/{height};"
		onmousedown={handlePointerDown}
		onmousemove={handlePointerMove}
		onmouseup={handlePointerUp}
		onmouseleave={handlePointerUp}
		ontouchstart={handlePointerDown}
		ontouchmove={handlePointerMove}
		ontouchend={handlePointerUp}
	></canvas>

	{#if allStrokes.length > 0}
		<button
			onclick={() => clear()}
			class="absolute top-2 right-2 px-3 py-1.5 text-xs sm:text-sm bg-clay-100 hover:bg-clay-200 active:bg-clay-300 rounded border border-clay-300 transition-colors"
		>
			Clear
		</button>
	{/if}
</div>
