# Nano Banana 2 — Image Generation API

Google Gemini's native image generation via the Generative Language API.

## Models

| Model | ID | Best for |
|-------|----|----------|
| Nano Banana 2 | `gemini-3.1-flash-image-preview` | High-efficiency, fast generation |
| Nano Banana Pro | `gemini-3-pro-image-preview` | Professional assets, advanced reasoning |
| Nano Banana | `gemini-2.5-flash-image` | Speed-optimized |

**Recommended for cinematic hero images: `gemini-3.1-flash-image-preview`** (Nano Banana 2)

## Endpoint

```
POST https://generativelanguage.googleapis.com/v1beta/models/{model-id}:generateContent
```

## Authentication

```
Header: x-goog-api-key: $GEMINI_API_KEY
```

Get your key at: https://aistudio.google.com/apikey
Each Google account gets $300 free credit.

## Request Format

### Text-to-Image with Config

```json
{
  "contents": [
    {
      "parts": [
        { "text": "A photorealistic cinematic scene of..." }
      ]
    }
  ],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9",
      "imageSize": "2K"
    }
  }
}
```

### With Reference Images (for brand consistency)

Include existing brand images as reference:

```json
{
  "contents": [
    {
      "parts": [
        { "text": "Generate a cinematic hero image matching this brand style..." },
        {
          "inlineData": {
            "mimeType": "image/png",
            "data": "BASE64_ENCODED_REFERENCE_IMAGE"
          }
        }
      ]
    }
  ],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9",
      "imageSize": "2K"
    }
  }
}
```

## Parameters

| Parameter | Values | Notes |
|-----------|--------|-------|
| `aspectRatio` | 1:1, 2:3, 3:2, 4:3, 16:9, 21:9 | Use 16:9 for hero sections |
| `imageSize` | 512, 1K, 2K, 4K | 2K is good balance of quality/speed |
| `responseModalities` | TEXT, IMAGE | Include both to get text description alongside |

## Response Format

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "inlineData": {
              "mimeType": "image/png",
              "data": "BASE64_ENCODED_IMAGE_DATA"
            }
          },
          {
            "text": "Description of the generated image..."
          }
        ]
      }
    }
  ]
}
```

## Decode & Save (bash)

```bash
# Extract base64 from response and decode to file
echo "$RESPONSE" | jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data' | base64 -d > hero-scene.png
```

## Python Example

```python
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

response = client.models.generate_content(
    model="gemini-3.1-flash-image-preview",
    contents="A cinematic hero image of healthcare innovation camp, dramatic lighting, navy and gold color palette, students collaborating on medical devices, shallow depth of field",
    config=types.GenerateContentConfig(
        response_modalities=["TEXT", "IMAGE"],
        image_config=types.ImageConfig(
            aspect_ratio="16:9",
            image_size="2K"
        ),
    )
)

for part in response.parts:
    if part.inline_data:
        image = part.as_image()
        image.save("public/images/hero-scene.png")
        print("Saved hero image")
    elif part.text:
        print(f"Description: {part.text}")
```

## Cinematic Prompt Tips

For hero images that will be animated into video:
- **Specify depth layers**: "foreground subject in sharp focus, blurred background"
- **Include atmosphere**: "volumetric light, particles, haze"
- **Avoid text in image**: Text renders poorly in video animation
- **Match brand palette**: "navy blue (#0F2A4A) tones, warm gold (#D4B978) highlights"
- **Suggest movement potential**: "steam rising", "fabric flowing" — elements the video model can animate
- **Use cinematic language**: "dramatic side lighting", "shallow depth of field", "golden hour warmth"

## Advanced Features

- **Up to 14 reference images**: 10 objects + 4 characters (Nano Banana 2)
- **Multi-turn editing**: Use chat interface for iterative refinement
- **Thinking mode**: Advanced reasoning enabled by default, control via `thinkingLevel`
