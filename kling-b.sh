#!/bin/bash
set -e
source /mnt/e/project/aspect-camp/.env
cd /mnt/e/project/aspect-camp/public/ex6

IMAGE_PATH="/mnt/e/project/aspect-camp/materials/camp/P1010531.webp"
PROMPT="Slow cinematic dolly-in toward the students examining specimens in the laboratory, steady constant speed, no camera shake, smooth cool scientific lighting, gradual zoom, no rapid movement"
OUTPUT="hero-b.mp4"

echo "[B] Uploading..."
UPLOAD=$(curl -s -X POST 'https://api.wavespeed.ai/api/v3/media/upload/binary' \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -F "file=@$IMAGE_PATH")
IMAGE_URL=$(echo "$UPLOAD" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['download_url'])")
echo "[B] Uploaded: $IMAGE_URL"

echo "[B] Submitting Kling O3 std..."
SUBMIT=$(curl -s -X POST 'https://api.wavespeed.ai/api/v3/kwaivgi/kling-video-o3-std/image-to-video' \
  -H "Authorization: Bearer $WAVESPEED_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"image\": \"$IMAGE_URL\", \"prompt\": \"$PROMPT\", \"duration\": 5}")
echo "[B] Submit response: $SUBMIT"
TASK_URL=$(echo "$SUBMIT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['urls']['get'])")
echo "[B] Polling: $TASK_URL"

for i in $(seq 1 40); do
  RESULT=$(curl -s "$TASK_URL" -H "Authorization: Bearer $WAVESPEED_API_KEY")
  STATUS=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['status'])")

  if [ "$STATUS" = "completed" ]; then
    VIDEO_URL=$(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['outputs'][0])")
    curl -s -o "$OUTPUT" "$VIDEO_URL"
    echo "[B] Saved: $OUTPUT ($(wc -c < $OUTPUT) bytes)"
    echo "[B] Extracting frames..."
    mkdir -p frames-b
    ffmpeg -y -i "$OUTPUT" -vf "fps=18,scale=1920:-1" -c:v libwebp -quality 82 frames-b/frame_%03d.webp 2>&1 | tail -3
    FRAME_COUNT=$(ls frames-b/ | wc -l)
    echo "[B] Done — $FRAME_COUNT frames extracted"
    exit 0
  elif [ "$STATUS" = "failed" ]; then
    echo "[B] FAILED: $(echo "$RESULT" | python3 -c "import sys,json; print(json.load(sys.stdin)['data']['error'])")"
    exit 1
  fi

  echo "[B] $STATUS ($i/40)..."
  sleep 15
done
echo "[B] Timeout" && exit 1
