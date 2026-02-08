/**
 * Export utilities for PNG/SVG/PDF generation
 */

import type {
	ExportFormat,
	ExportOptions,
	RenderStyle,
	RenderedVerse
} from '$lib/types';
import { DEFAULT_EXPORT_OPTIONS, ATTRIBUTION_TEXT, RENDER_STYLE_CONFIGS } from '$lib/types/export';

/**
 * Generate filename for export
 */
export function generateFilename(
	baseName: string,
	format: ExportFormat,
	style: RenderStyle
): string {
	const timestamp = new Date().toISOString().slice(0, 10);
	const sanitized = baseName
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.slice(0, 30);
	return `cuneiform-${sanitized}-${style}-${timestamp}.${format}`;
}

/**
 * Export a rendered element to PNG using html2canvas
 */
export async function exportToPNG(
	element: HTMLElement,
	options: Partial<ExportOptions> = {}
): Promise<Blob> {
	const opts = { ...DEFAULT_EXPORT_OPTIONS, ...options };

	// Dynamically import html2canvas
	const { default: html2canvas } = await import('html2canvas');

	const canvas = await html2canvas(element, {
		scale: opts.dpi / 96, // html2canvas uses 96 DPI as base
		useCORS: true,
		backgroundColor: null,
		logging: false
	});

	return new Promise((resolve, reject) => {
		canvas.toBlob(
			(blob) => {
				if (blob) resolve(blob);
				else reject(new Error('Failed to create PNG blob'));
			},
			'image/png'
		);
	});
}

/**
 * Generate SVG string from rendered cuneiform
 */
export function generateSVG(
	verse: RenderedVerse,
	options: Partial<ExportOptions> = {}
): string {
	const opts = { ...DEFAULT_EXPORT_OPTIONS, ...options };
	const config = RENDER_STYLE_CONFIGS[opts.style];

	const lines = verse.lines;
	const lineHeight = 60;
	const padding = 40;
	const fontSize = 32 * config.cuneiformScale;

	const height = lines.length * lineHeight + padding * 2 +
		(opts.includeAttribution ? 80 : 0) +
		(opts.includeTransliteration ? lines.length * 24 : 0);

	let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${opts.width}" height="${height}" viewBox="0 0 ${opts.width} ${height}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Cuneiform&amp;family=Cormorant+Garamond:wght@400;500&amp;display=swap');
      .cuneiform { font-family: 'Noto Sans Cuneiform', sans-serif; fill: ${config.textColor}; }
      .transliteration { font-family: 'Cormorant Garamond', serif; font-style: italic; fill: ${config.textColor}; opacity: 0.7; }
      .attribution { font-family: 'Cormorant Garamond', serif; font-size: 10px; fill: ${config.textColor}; opacity: 0.6; }
    </style>
  </defs>
  <rect width="100%" height="100%" fill="${config.background.includes('gradient') ? '#d4c4a0' : config.background}"/>
`;

	let y = padding + fontSize;

	for (const line of lines) {
		const cuneiformText = line.words
			.map(w => w.syllables.map(s => s.sign).join(''))
			.join(' ');

		svg += `  <text x="${padding}" y="${y}" class="cuneiform" font-size="${fontSize}">${escapeXML(cuneiformText)}</text>\n`;

		if (opts.includeTransliteration && config.showTransliteration) {
			y += 24;
			svg += `  <text x="${padding}" y="${y}" class="transliteration" font-size="14">${escapeXML(line.original)}</text>\n`;
		}

		y += lineHeight;
	}

	if (opts.includeAttribution) {
		y += 20;
		svg += `  <text x="${padding}" y="${y}" class="attribution">${escapeXML(ATTRIBUTION_TEXT.slice(0, 120))}...</text>\n`;
	}

	svg += '</svg>';

	return svg;
}

/**
 * Export to SVG file
 */
export function exportToSVG(
	verse: RenderedVerse,
	options: Partial<ExportOptions> = {}
): Blob {
	const svg = generateSVG(verse, options);
	return new Blob([svg], { type: 'image/svg+xml' });
}

/**
 * Export to PDF using jsPDF
 */
export async function exportToPDF(
	element: HTMLElement,
	verse: RenderedVerse,
	options: Partial<ExportOptions> = {}
): Promise<Blob> {
	const opts = { ...DEFAULT_EXPORT_OPTIONS, ...options };

	// Dynamically import jsPDF
	const { default: jsPDF } = await import('jspdf');

	const pdf = new jsPDF({
		orientation: opts.width > opts.height ? 'landscape' : 'portrait',
		unit: 'pt',
		format: [opts.width, opts.height]
	});

	// For now, we'll use html2canvas to render to PDF
	// A more sophisticated approach would render text directly
	const { default: html2canvas } = await import('html2canvas');

	const canvas = await html2canvas(element, {
		scale: 2,
		useCORS: true,
		backgroundColor: null
	});

	const imgData = canvas.toDataURL('image/png');
	pdf.addImage(imgData, 'PNG', 0, 0, opts.width, opts.height);

	// Add attribution at the bottom
	if (opts.includeAttribution) {
		pdf.setFontSize(8);
		pdf.setTextColor(100);
		const text = ATTRIBUTION_TEXT.slice(0, 150) + '...';
		pdf.text(text, 20, opts.height - 20, { maxWidth: opts.width - 40 });
	}

	return pdf.output('blob');
}

/**
 * Download a blob as a file
 */
export function downloadBlob(blob: Blob, filename: string): void {
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

/**
 * Copy cuneiform text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		// Fallback for older browsers
		const textarea = document.createElement('textarea');
		textarea.value = text;
		textarea.style.position = 'fixed';
		textarea.style.left = '-9999px';
		document.body.appendChild(textarea);
		textarea.select();
		try {
			document.execCommand('copy');
			return true;
		} finally {
			document.body.removeChild(textarea);
		}
	}
}

/**
 * Escape special XML characters
 */
function escapeXML(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

/**
 * Create a shareable URL for a verse (client-side only)
 */
export function createShareableURL(text: string, style: RenderStyle): string {
	const params = new URLSearchParams({
		text: text.slice(0, 500), // Limit length
		style
	});
	return `${window.location.origin}/create?${params.toString()}`;
}
