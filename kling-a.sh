#!/bin/bash
set -e
source /mnt/e/project/aspect-camp/.env
cd /mnt/e/project/aspect-camp/public/ex6

IMAGE_PATH="/mnt/e/project/aspect-camp/materials/camp/_DSC0169.webp"
PROMPT="Slow cinematic dolly-in toward the celebrating students holding the award, steady constant speed, no camera shake, smooth warm stage lighting, no rapid movement, no face distortion"
OUTPUT="hero-a.mp4"

echo "[A] Uploading..."
UPLOAD=$(curl -s -X POST 'https://api.wavespeed.ai/api/v3/media/upload/binary' \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -F "file=@$IMAGE_PATH")
IMAGE_URL=$(echo "$UPLOAD" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['download_url'])")
echo "[A] Uploaded: $IMAGE_URL"

echo "[A] Submitting Kling O3 std..."
SUBMIT=$(curl -s -X POST 'https://api.wavespeed.ai/api/v3/kwaivgi/kling-video-o3-std/image-to-video' \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"image\": \"$IMAGE_URL\", \"prompt\": \"$PROMPT\", \"duration\": 5}")
echo "[A] Submit response: $SUBMIT"
TASK_URL=$(echo "$SUBMIT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['urls']['get'])")
echo "[A] Polling: $TASK_URL"

for i in $(seq 1 40); do
  RESULT=$(curl -s "$TASK_URL" -H "Authorization: Bearer $WAVESPEED_API_KEY")
  STATUS=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['status'])")

  if [ "$STATUS" = "completed" ]; then
    VIDEO_URL=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['outputs'][0])")
    curl -s -o "$OUTPUT" "$VIDEO_URL"
    echo "[A] Saved: $OUTPUT ($(wc -c < $OUTPUT) bytes)"
    echo "[A] Extracting frames..."
    mkdir -p frames-a
    ffmpeg -y -i "$OUTPUT" -vf "fps=18,scale=1920:-1" -c:v libwebp -quality 82 frames-a/frame_%03d.webp 2>&1 | tail -3
    FRAME_COUNT=$(ls frames-a/ | wc -l)
    echo "[A] Done — $FRAME_COUNT frames extracted"
    exit 0
  elif [ "$STATUS" = "failed" ]; then
    echo "[A] FAILED: $(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['error'])")"
    exit 1
  fi

  echo "[A] $STATUS ($i/40)..."
  sleep 15
done
echo "[A] Timeout" && exit 1
