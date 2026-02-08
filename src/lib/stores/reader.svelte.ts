/**
 * Read mode state using Svelte 5 runes
 */

import type { CuneiformSign, WedgeComposition, SignSearchResult } from '$lib/types';
import type { EnhancementSettings } from '$lib/utils/image-enhance';
import { DEFAULT_ENHANCEMENT } from '$lib/utils/image-enhance';
import { findSignsByWedges, createEmptyFilter } from '$lib/utils/wedge-match';

export interface SelectionRegion {
	x: number;
	y: number;
	w: number;
	h: number;
}

class ReaderStore {
	/** Uploaded image data URL */
	uploadedImage = $state<string | null>(null);

	/** Original image dimensions */
	imageDimensions = $state<{ width: number; height: number } | null>(null);

	/** Current zoom level (1 = 100%) */
	zoomLevel = $state(1);

	/** Pan offset */
	panOffset = $state({ x: 0, y: 0 });

	/** Selected region for sign identification */
	selectedRegion = $state<SelectionRegion | null>(null);

	/** Image enhancement settings */
	enhancements = $state<EnhancementSettings>({ ...DEFAULT_ENHANCEMENT });

	/** Wedge filter for sign matching */
	wedgeFilter = $state<WedgeComposition>(createEmptyFilter());

	/** Tolerance for wedge matching */
	matchTolerance = $state(1);

	/** Candidate signs based on wedge filter */
	candidateSigns = $derived.by(() => this.filterByWedges());

	/** Currently selected sign from candidates */
	selectedSign = $state<CuneiformSign | null>(null);

	/** Whether the user is currently drawing a selection */
	isSelecting = $state(false);

	/** Filter signs by current wedge composition */
	private filterByWedges(): SignSearchResult[] {
		const totalWedges =
			this.wedgeFilter.horizontal +
			this.wedgeFilter.vertical +
			this.wedgeFilter.oblique +
			this.wedgeFilter.winkelhaken;

		// Don't filter if no wedges specified
		if (totalWedges === 0) return [];

		return findSignsByWedges(this.wedgeFilter, this.matchTolerance);
	}

	/** Upload a new image */
	uploadImage(dataUrl: string, width: number, height: number) {
		this.uploadedImage = dataUrl;
		this.imageDimensions = { width, height };
		this.resetView();
	}

	/** Reset view to defaults */
	resetView() {
		this.zoomLevel = 1;
		this.panOffset = { x: 0, y: 0 };
		this.selectedRegion = null;
		this.selectedSign = null;
	}

	/** Set zoom level */
	setZoom(level: number) {
		this.zoomLevel = Math.max(0.1, Math.min(5, level));
	}

	/** Zoom in by a step */
	zoomIn() {
		this.setZoom(this.zoomLevel * 1.25);
	}

	/** Zoom out by a step */
	zoomOut() {
		this.setZoom(this.zoomLevel / 1.25);
	}

	/** Set pan offset */
	setPan(x: number, y: number) {
		this.panOffset = { x, y };
	}

	/** Set selected region */
	setSelection(region: SelectionRegion | null) {
		this.selectedRegion = region;
	}

	/** Update enhancement settings */
	setEnhancements(settings: Partial<EnhancementSettings>) {
		this.enhancements = { ...this.enhancements, ...settings };
	}

	/** Reset enhancements to defaults */
	resetEnhancements() {
		this.enhancements = { ...DEFAULT_ENHANCEMENT };
	}

	/** Update wedge filter */
	setWedgeFilter(filter: Partial<WedgeComposition>) {
		this.wedgeFilter = { ...this.wedgeFilter, ...filter };
	}

	/** Increment a wedge count */
	incrementWedge(type: keyof WedgeComposition) {
		this.wedgeFilter = {
			...this.wedgeFilter,
			[type]: this.wedgeFilter[type] + 1
		};
	}

	/** Decrement a wedge count */
	decrementWedge(type: keyof WedgeComposition) {
		this.wedgeFilter = {
			...this.wedgeFilter,
			[type]: Math.max(0, this.wedgeFilter[type] - 1)
		};
	}

	/** Reset wedge filter */
	resetWedgeFilter() {
		this.wedgeFilter = createEmptyFilter();
	}

	/** Set match tolerance */
	setTolerance(tolerance: number) {
		this.matchTolerance = Math.max(0, Math.min(3, tolerance));
	}

	/** Select a sign from candidates */
	selectSign(sign: CuneiformSign | null) {
		this.selectedSign = sign;
	}

	/** Full reset */
	reset() {
		this.uploadedImage = null;
		this.imageDimensions = null;
		this.resetView();
		this.resetEnhancements();
		this.resetWedgeFilter();
	}
}

export const readerStore = new ReaderStore();
