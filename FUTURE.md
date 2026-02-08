# Future Roadmap

## Phase 1: Akkademia Integration (AI Transliteration)

### Overview

[Akkademia](https://github.com/gaigutherz/Akkademia) is an open-source tool for automatically transliterating Unicode cuneiform glyphs. It uses HMM, MEMM, and BiLSTM neural networks trained on the RINAP corpora (Royal Inscriptions of the Neo-Assyrian Period).

**Accuracy rates:**
- HMM: 89.5%
- MEMM: 94%
- BiLSTM: 96.7%

**Published research:** [PNAS Nexus (peer-reviewed)](https://academic.oup.com/pnasnexus/article/2/5/pgad096/7147349)

### Why This Matters

Only a few hundred experts worldwide can read cuneiform, yet over 500,000 tablets exist—many still untranslated. AI tools like Akkademia could democratize access to ancient texts.

---

### Integration Options

#### Option A: Backend API Service (Recommended)

**Architecture:**
```
[Discover Cuneiform Frontend] → [API Gateway] → [Python Backend with Akkademia]
```

**Implementation:**
1. Create a lightweight FastAPI/Flask backend hosting the `akkadian` Python package
2. Expose endpoints:
   - `POST /api/transliterate` - transliterate cuneiform Unicode
   - `POST /api/transliterate/top3` - get top 3 BiLSTM options
3. Deploy on Vercel Serverless Functions, Railway, or similar
4. Add rate limiting and caching

**Pros:** Full control, all algorithms available, can add custom features
**Cons:** Requires backend hosting, Python 3.7.x dependency

#### Option B: External Link (Quick Win)

Link users to the Babylonian Engine website for transliteration. Already implemented in Discover page.

**Pros:** Zero maintenance, immediate
**Cons:** User leaves our site, no integration with our data

#### Option C: WebAssembly Port (Long-term)

Port the BiLSTM model to run in-browser using ONNX.js or TensorFlow.js.

**Pros:** No backend needed, instant response, works offline
**Cons:** Significant development effort, model conversion complexity

---

### Feature Roadmap

#### 1. Explore Mode: AI Verification

Add "Compare with AI" button to tablet text display:
- Show Akkademia's transliteration alongside scholarly version
- Highlight differences
- Educational: explain why they might differ (period, genre, training data)

```
Scholarly:  ša naq-ba i-mu-ru iš-di ma-a-ti
AI (96.7%): ša₂ nak-ba-i-mu-ru iš-di-ma-a-ti
```

#### 2. Create Mode: "What Does This Say?"

After user creates cuneiform text:
- Button: "Transliterate with AI"
- Show how AI reads their creation
- Explain that phonetic approximation ≠ authentic Akkadian

#### 3. Learn Mode: Practice with Real Texts

- Import untranslated tablets from CDLI
- User attempts transliteration
- AI provides hints/verification
- Gamified learning experience

#### 4. Sign Recognition (Future)

Akkademia focuses on transliteration, but future versions could:
- Identify individual signs from user drawings
- Suggest sign readings based on context

---

### Technical Requirements

**Python Environment (for backend):**
```
Python 3.7.x (required - doesn't work with other versions)
torch==1.0.0 or higher
allennlp==0.8.5
akkadian (pip package)
```

**API Endpoints Design:**

```python
# POST /api/transliterate
{
  "cuneiform": "𒃻𒅘𒁀𒄿𒈬𒊒𒅖𒁲𒈠𒀀𒋾",
  "algorithm": "bilstm"  # hmm | memm | bilstm
}

# Response
{
  "transliteration": "ša₂ nak-ba-i-mu-ru iš-di-ma-a-ti",
  "algorithm": "bilstm",
  "confidence": 0.967
}

# POST /api/transliterate/top3
{
  "cuneiform": "𒃻𒅘𒁀𒄿𒈬𒊒𒅖𒁲𒈠𒀀𒋾"
}

# Response
{
  "results": [
    {"transliteration": "ša₂ nak-ba-i-mu-ru iš-di-ma-a-ti", "rank": 1},
    {"transliteration": "ša₂-di-ba i mu ru-iš di ma tukul-tu", "rank": 2},
    {"transliteration": "MUN kis BA še-MU-šub-šah-ṭi-nab-nu-ti-", "rank": 3}
  ]
}
```

---

### Training Data Expansion

Akkademia is trained on RINAP (Neo-Assyrian Royal Inscriptions). The repo includes additional corpora for future training:

| Corpus | Description | Potential Use |
|--------|-------------|---------------|
| RIAO | Royal Inscriptions of Assyria online | Expand Assyrian coverage |
| RIBO | Royal Inscriptions of Babylonia online | Babylonian texts |
| SAAO | State Archives of Assyria online | Administrative texts |
| SUHU | Inscriptions of Suhu online | Regional variety |

**Contribution opportunity:** Train models on literary texts (Epic of Gilgamesh, Enuma Elish) for better accuracy on our Explore tablets.

---

## Phase 2: Full Translation (NMT)

The Akkademia repo includes `NMT_input/` and `full_translation_build_data.py`, suggesting work on full Akkadian→English translation using Neural Machine Translation.

**Future feature:** "Translate to English" button that goes beyond transliteration.

---

## Phase 3: Image-to-Cuneiform (OCR)

**Long-term goal:** Upload tablet photo → AI extracts cuneiform Unicode → transliteration

This would require:
1. Cuneiform OCR model (separate project)
2. Integration with Akkademia for transliteration
3. Quality assessment for damaged/partial tablets

---

## Resources

- **Paper:** [Translating Akkadian to English with neural machine translation](https://academic.oup.com/pnasnexus/article/2/5/pgad096/7147349) (PNAS Nexus)
- **Code:** [github.com/gaigutherz/Akkademia](https://github.com/gaigutherz/Akkademia)
- **Training data:** [ORACC](https://oracc.museum.upenn.edu/), [RINAP](http://oracc.museum.upenn.edu/rinap/)
- **License:** CC BY-SA 3.0 (compatible with our MIT license with attribution)

---

## Implementation Priority

| Priority | Feature | Effort | Impact |
|----------|---------|--------|--------|
| 1 | External link to Akkademia (done) | Low | Medium |
| 2 | Backend API for transliteration | Medium | High |
| 3 | "Compare with AI" in Explore | Medium | High |
| 4 | "What does this say?" in Create | Medium | High |
| 5 | Practice mode in Learn | High | Medium |
| 6 | Custom model training | High | Medium |
| 7 | Image OCR pipeline | Very High | Very High |

---

## Phase 4: CuneiML Dataset Integration

### Overview

[CuneiML](https://zenodo.org/records/10806319) is a cuneiform dataset from UC San Diego containing **38,947 photographs** of cuneiform tablets with bounding boxes, transliterations, and cuneiform Unicode mappings.

**Published:** March 2024 in Journal of Open Humanities Data
**Authors:** Chen, Danlu; Agarwal, Aditi; Berg-Kirkpatrick, Taylor; Myerston, Jacobo
**License:** CC BY (fully compatible with educational use)
**DOI:** 10.5281/zenodo.10806319

### Dataset Contents

| Data Type | Description |
|-----------|-------------|
| Photographs | 38,947 tablet images |
| Line Art | Simplified drawings for clearer sign identification |
| Bounding Boxes | Coordinates for cuneiform text regions (upper-left, lower-right) |
| Transliterations | Raw text format |
| Unicode | Cuneiform character representations |
| Metadata | Geographic location, time period, genre classification |
| Sign Annotations | Sign-level breakdowns for obverse/reverse sides |

### Feature Ideas

#### 1. ML-Powered Sign Recognition

Use the bounding box annotations to train/integrate a model that identifies cuneiform signs from uploaded photos.

**Enhancement to Read mode:**
- User uploads tablet photo
- ML model detects sign regions automatically
- Suggests sign identifications with confidence scores
- Dramatically improves the current manual wedge-counting approach

**Technical approach:**
```
[Photo Upload] → [Object Detection Model] → [Bounding Boxes] → [Sign Classification] → [Results]
```

#### 2. Expanded Tablet Gallery

Add tablets from CuneiML with rich metadata:

```typescript
interface CuneiMLTablet {
  id: string;
  photograph: string;      // High-res photo URL
  lineArt: string;         // Simplified drawing
  transliteration: string;
  cuneiformUnicode: string;
  metadata: {
    period: string;        // "Old Babylonian", "Neo-Assyrian", etc.
    origin: string;        // "Ur", "Nippur", "Nineveh", etc.
    genre: string;         // "administrative", "literary", "royal"
  };
  boundingBoxes: BoundingBox[];
}
```

#### 3. Period & Region Filters

Add filtering capabilities to Explore mode:

- **By Period:** Old Babylonian, Middle Assyrian, Neo-Assyrian, Neo-Babylonian, Achaemenid
- **By Region:** Ur, Nippur, Babylon, Nineveh, Assur, Mari
- **By Genre:** Administrative, Literary, Royal Inscription, Letter, Legal, Omen

#### 4. Interactive Sign-by-Sign Viewer

Overlay bounding boxes on tablet photographs:

```svelte
<!-- Tablet with interactive sign overlay -->
<div class="relative">
  <img src={tablet.photograph} alt={tablet.name} />
  {#each tablet.boundingBoxes as box}
    <button
      class="absolute border-2 border-lapis-500 hover:bg-lapis-500/20"
      style="left: {box.x1}%; top: {box.y1}%; width: {box.width}%; height: {box.height}%"
      onclick={() => showSignDetail(box.sign)}
    />
  {/each}
</div>
```

**User interaction:**
- Hover over sign → highlight bounding box
- Click sign → show reading, meaning, and Unicode
- Compare obverse/reverse sides

#### 5. Photo-to-Text Pipeline

Full pipeline from photograph to transliteration:

```
[Upload Photo] → [Bounding Box Detection] → [Sign Recognition] → [Unicode Extraction] → [Akkademia Transliteration]
```

This combines CuneiML's visual data with Akkademia's transliteration engine for a complete solution.

#### 6. Line Art Toggle

Switch between photograph and line art views:

```svelte
<div class="flex gap-2">
  <button onclick={() => viewMode = 'photo'}>Photograph</button>
  <button onclick={() => viewMode = 'lineArt'}>Line Art</button>
</div>

{#if viewMode === 'photo'}
  <img src={tablet.photograph} />
{:else}
  <img src={tablet.lineArt} />
{/if}
```

**Benefits:**
- Line art is clearer for learning sign shapes
- Easier to identify damaged or worn signs
- Better for printing/study materials

---

### Technical Implementation

#### Data Processing Pipeline

```python
# Process CuneiML JSON files
import json

def process_cuneml_tablet(tablet_json):
    return {
        "id": tablet_json["tablet_id"],
        "images": {
            "photo": tablet_json["image_url"],
            "line_art": tablet_json.get("line_art_url")
        },
        "text": {
            "obverse": extract_side(tablet_json, "obverse"),
            "reverse": extract_side(tablet_json, "reverse")
        },
        "bounding_boxes": normalize_boxes(tablet_json["boxes"]),
        "metadata": extract_metadata(tablet_json)
    }
```

#### Frontend Integration

```typescript
// src/lib/data/cuneml-tablets.ts
export interface CuneiMLTablet {
  id: string;
  name: string;
  period: string;
  origin: string;
  genre: string;
  images: {
    photo: string;
    lineArt?: string;
  };
  signs: SignAnnotation[];
}

export const cuneimlTablets: CuneiMLTablet[] = [
  // Processed tablet data
];
```

---

### Implementation Priority

| Priority | Feature | Effort | Impact |
|----------|---------|--------|--------|
| 1 | Import subset of tablets with metadata | Medium | High |
| 2 | Period/region filters in Explore | Low | Medium |
| 3 | Line art toggle | Low | Medium |
| 4 | Interactive bounding box overlay | Medium | High |
| 5 | ML sign detection model | Very High | Very High |
| 6 | Full photo-to-text pipeline | Very High | Very High |

---

### Resources

- **Dataset:** [Zenodo 10.5281/zenodo.10806319](https://zenodo.org/records/10806319)
- **Paper:** Journal of Open Humanities Data (2024)
- **License:** CC BY (Attribution required)
- **Institution:** University of California, San Diego
