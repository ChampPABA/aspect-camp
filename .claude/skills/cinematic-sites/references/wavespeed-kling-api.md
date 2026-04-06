# WaveSpeed — Kling O3 Video Generation API

Animate static images into cinematic videos using Kling O3 via WaveSpeed's API.

## Models Available

| Model | Path | Price (5s) | Price (10s) |
|-------|------|-----------|------------|
| **Kling O3 Pro** | `kwaivgi/kling-video-o3-pro/image-to-video` | $0.56 | $1.12 |
| Kling O3 Standard | `kwaivgi/kling-video-o3-std/image-to-video` | $0.42 | $0.84 |
| Kling O3 Pro (text) | `kwaivgi/kling-video-o3-pro/text-to-video` | $0.56 | $1.12 |
| Kling O3 Pro (ref) | `kwaivgi/kling-video-o3-pro/reference-to-video` | $0.56 | $1.12 |

**Recommended for cinematic hero videos: `kwaivgi/kling-video-o3-pro/image-to-video`**

With audio: add $0.14 per 5s.

## Authentication

```
Header: Authorization: Bearer $WAVESPEED_API_KEY
```

Get your key at: https://wavespeed.ai/settings/api-keys

## Workflow: Submit → Poll → Download

### Step 1: Submit Generation Job

```
POST https://api.wavespeed.ai/api/v3/kwaivgi/kling-video-o3-pro/image-to-video
```

```json
{
  "image": "https://public-url-to-your-image.png",
  "prompt": "slow cinematic zoom in, steam rising gently, warm atmospheric lighting",
  "duration": 5,
  "sound": false,
  "shot_type": "customize"
}
```

**Important:** The `image` field must be a publicly accessible URL. If your image is local, upload it first (e.g., to Vercel, or use a temporary file hosting service).

### Step 2: Poll for Result

```
GET https://api.wavespeed.ai/api/v3/predictions/{requestId}/result
```

Poll every 10-15 seconds until `status` is `"completed"`.

### Step 3: Download Video

The completed response contains the MP4 URL in `data.outputs[0]`.

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `image` | string (URL) | Yes | — | Starting frame image URL |
| `prompt` | string | No | — | Motion/camera movement description |
| `end_image` | string (URL) | No | — | Ending frame for controlled transitions |
| `duration` | integer | No | 5 | Video length: 3–15 seconds |
| `sound` | boolean | No | false | Generate ambient audio |
| `shot_type` | string | No | "customize" | "customize" or "intelligent" |
| `multi_prompt` | array | No | — | Scene transition segments |
| `element_list` | array | No | — | Visual consistency elements |

## Response Format

### Submission Response
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "prediction_abc123"
  }
}
```

### Completed Result
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "prediction_abc123",
    "model": "kwaivgi/kling-video-o3-pro/image-to-video",
    "outputs": ["https://cdn.wavespeed.ai/outputs/video.mp4"],
    "status": "completed",
    "has_nsfw_contents": [false]
  }
}
```

## cURL Example (Full Flow)

```bash
# 1. Submit job
RESPONSE=$(curl -s -X POST \
  "https://api.wavespeed.ai/api/v3/kwaivgi/kling-video-o3-pro/image-to-video" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -d '{
    "image": "https://your-site.vercel.app/images/hero-scene.png",
    "prompt": "slow cinematic zoom in with gentle camera movement, warm atmospheric lighting, subtle particle effects floating in the air",
    "duration": 5,
    "sound": false,
    "shot_type": "customize"
  }')

REQUEST_ID=$(echo "$RESPONSE" | jq -r '.data.id')
echo "Job submitted: $REQUEST_ID"

# 2. Poll until complete
while true; do
  RESULT=$(curl -s -X GET \
    "https://api.wavespeed.ai/api/v3/predictions/$REQUEST_ID/result" \
    -H "Authorization: Bearer $WAVESPEED_API_KEY")
  
  STATUS=$(echo "$RESULT" | jq -r '.data.status')
  echo "Status: $STATUS"
  
  if [ "$STATUS" = "completed" ]; then
    VIDEO_URL=$(echo "$RESULT" | jq -r '.data.outputs[0]')
    echo "Video ready: $VIDEO_URL"
    break
  fi
  sleep 15
done

# 3. Download
curl -o public/videos/hero-scene.mp4 "$VIDEO_URL"
```

## Node.js Example

```javascript
async function generateVideo(imageUrl, prompt) {
  const API_KEY = process.env.WAVESPEED_API_KEY;
  const BASE = "https://api.wavespeed.ai/api/v3";
  const MODEL = "kwaivgi/kling-video-o3-pro/image-to-video";

  // Submit
  const submitRes = await fetch(`${BASE}/${MODEL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      image: imageUrl,
      prompt,
      duration: 5,
      sound: false,
      shot_type: "customize",
    }),
  });
  const { data: { id } } = await submitRes.json();

  // Poll
  while (true) {
    const resultRes = await fetch(`${BASE}/predictions/${id}/result`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const result = await resultRes.json();
    if (result.data.status === "completed") {
      return result.data.outputs[0]; // MP4 URL
    }
    await new Promise((r) => setTimeout(r, 15000));
  }
}
```

## Motion Prompt Guidelines

For cinematic hero videos:
- **Camera:** "slow cinematic zoom in", "gentle pan left to right", "subtle dolly forward"
- **Elements:** "steam rising", "particles floating", "fabric flowing", "light shifting"
- **Atmosphere:** "warm atmospheric lighting", "volumetric rays", "bokeh in background"
- **Physics:** "natural physics simulation", "gentle motion with weight"
- **Avoid:** rapid movements, camera shakes, complex scene changes for hero sections
- **Duration:** 5 seconds is ideal for scroll-driven hero (creates ~150 frames at 30fps)
