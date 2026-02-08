/**
 * Canvas-based image processing utilities for tablet photo enhancement
 */

export interface EnhancementSettings {
	brightness: number; // -100 to 100
	contrast: number;   // -100 to 100
	invert: boolean;
}

export const DEFAULT_ENHANCEMENT: EnhancementSettings = {
	brightness: 0,
	contrast: 0,
	invert: false
};

/**
 * Apply enhancement settings to a canvas
 */
export function applyEnhancements(
	ctx: CanvasRenderingContext2D,
	settings: EnhancementSettings
): void {
	const { brightness, contrast, invert } = settings;

	// Build filter string
	const filters: string[] = [];

	if (brightness !== 0) {
		// brightness filter: 100% is default, 0% is black, 200% is 2x bright
		const value = 100 + brightness;
		filters.push(`brightness(${value}%)`);
	}

	if (contrast !== 0) {
		// contrast filter: 100% is default
		const value = 100 + contrast;
		filters.push(`contrast(${value}%)`);
	}

	if (invert) {
		filters.push('invert(100%)');
	}

	ctx.filter = filters.length > 0 ? filters.join(' ') : 'none';
}

/**
 * Load an image from a URL or File and return as HTMLImageElement
 */
export function loadImage(source: string | File): Promise<HTMLImageElement> {
	return new Promise((resolve, reject) => {
		const img = new Image();

		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error('Failed to load image'));

		if (typeof source === 'string') {
			img.src = source;
		} else {
			const reader = new FileReader();
			reader.onload = (e) => {
				img.src = e.target?.result as string;
			};
			reader.onerror = () => reject(new Error('Failed to read file'));
			reader.readAsDataURL(source);
		}
	});
}

/**
 * Create a canvas with an image and optional enhancements
 */
export async function createEnhancedCanvas(
	source: string | File | HTMLImageElement,
	settings: EnhancementSettings = DEFAULT_ENHANCEMENT,
	maxSize?: { width: number; height: number }
): Promise<HTMLCanvasElement> {
	let img: HTMLImageElement;

	if (source instanceof HTMLImageElement) {
		img = source;
	} else {
		img = await loadImage(source);
	}

	const canvas = document.createElement('canvas');
	let { width, height } = img;

	// Scale down if needed
	if (maxSize) {
		const scale = Math.min(
			maxSize.width / width,
			maxSize.height / height,
			1
		);
		width = Math.round(width * scale);
		height = Math.round(height * scale);
	}

	canvas.width = width;
	canvas.height = height;

	const ctx = canvas.getContext('2d');
	if (!ctx) throw new Error('Could not get canvas context');

	applyEnhancements(ctx, settings);
	ctx.drawImage(img, 0, 0, width, height);
	ctx.filter = 'none';

	return canvas;
}

/**
 * Crop a region from a canvas
 */
export function cropCanvas(
	canvas: HTMLCanvasElement,
	region: { x: number; y: number; w: number; h: number }
): HTMLCanvasElement {
	const cropped = document.createElement('canvas');
	cropped.width = region.w;
	cropped.height = region.h;

	const ctx = cropped.getContext('2d');
	if (!ctx) throw new Error('Could not get canvas context');

	ctx.drawImage(
		canvas,
		region.x, region.y, region.w, region.h,
		0, 0, region.w, region.h
	);

	return cropped;
}

/**
 * Convert canvas to data URL
 */
export function canvasToDataURL(
	canvas: HTMLCanvasElement,
	type: 'png' | 'jpeg' = 'png',
	quality?: number
): string {
	return canvas.toDataURL(`image/${type}`, quality);
}

/**
 * Convert canvas to Blob
 */
export function canvasToBlob(
	canvas: HTMLCanvasElement,
	type: 'png' | 'jpeg' = 'png',
	quality?: number
): Promise<Blob> {
	return new Promise((resolve, reject) => {
		canvas.toBlob(
			(blob) => {
				if (blob) resolve(blob);
				else reject(new Error('Failed to create blob'));
			},
			`image/${type}`,
			quality
		);
	});
}

/**
 * Apply grayscale conversion for better sign visibility
 */
export function applyGrayscale(ctx: CanvasRenderingContext2D): void {
	const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const data = imageData.data;

	for (let i = 0; i < data.length; i += 4) {
		const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
		data[i] = gray;     // R
		data[i + 1] = gray; // G
		data[i + 2] = gray; // B
		// Alpha stays the same
	}

	ctx.putImageData(imageData, 0, 0);
}

/**
 * Apply threshold for high-contrast binary image
 */
export function applyThreshold(
	ctx: CanvasRenderingContext2D,
	threshold: number = 128
): void {
	const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const data = imageData.data;

	for (let i = 0; i < data.length; i += 4) {
		const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
		const value = gray >= threshold ? 255 : 0;
		data[i] = value;     // R
		data[i + 1] = value; // G
		data[i + 2] = value; // B
	}

	ctx.putImageData(imageData, 0, 0);
}

/**
 * Get a sharper version of the image for sign detection
 */
export function applySharpen(ctx: CanvasRenderingContext2D): void {
	const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
	const data = imageData.data;
	const width = ctx.canvas.width;
	const height = ctx.canvas.height;

	// Simple sharpening kernel
	const kernel = [
		0, -1, 0,
		-1, 5, -1,
		0, -1, 0
	];

	const original = new Uint8ClampedArray(data);

	for (let y = 1; y < height - 1; y++) {
		for (let x = 1; x < width - 1; x++) {
			for (let c = 0; c < 3; c++) {
				let val = 0;
				for (let ky = -1; ky <= 1; ky++) {
					for (let kx = -1; kx <= 1; kx++) {
						const idx = ((y + ky) * width + (x + kx)) * 4 + c;
						val += original[idx] * kernel[(ky + 1) * 3 + (kx + 1)];
					}
				}
				data[(y * width + x) * 4 + c] = Math.min(255, Math.max(0, val));
			}
		}
	}

	ctx.putImageData(imageData, 0, 0);
}
