#!/bin/bash

# Simple local development server launcher for 4004ENG MATLAB PC Labs

# Step 1: Re-encrypt solutions & sync manifest from GitLab repository
GITLAB_DIR="/Users/aa3025/GitLab/4004ENG-MATLAB"
WEB_DIR="$GITLAB_DIR/4004ENG-matlab-web"

if [ -d "$GITLAB_DIR" ]; then
    echo "🔨 Running encryption + manifest sync script in GitLab..."
    (cd "$GITLAB_DIR" && python3 encrypt_solutions.py)
    
    echo "🔄 Syncing updated encrypted files to local web server..."
    mkdir -p "$WEB_DIR"
    rsync -avq --delete \
      --exclude='.git' \
      --exclude='Grader' \
      --exclude='solutions' \
      --exclude='src' \
      --exclude='legacy_4028CEM' \
      --exclude='passwords.json' \
      --exclude='encrypt_solutions.py' \
      --exclude='extract_images.py' \
      --exclude='instructions.md' \
      --exclude='modification_plan.md' \
      --exclude='sync_2_github.sh' \
      --exclude='4004ENG-matlab-web' \
      --exclude='*.mp3' \
      --exclude='*.gif' \
      --exclude='*.jpg' \
      "$GITLAB_DIR/" "$WEB_DIR/"
fi

echo "=========================================================="
echo "🚀 Starting local development server for 4004ENG website..."
echo "🔗 URL: http://127.0.0.1:8000/"
echo "🛑 Press Ctrl+C to stop the server."
echo "=========================================================="

# Automatically open the site in the default browser (macOS)
# Start python3 HTTP server on port 8000 first
python3 -m http.server 8000 &
SERVER_PID=$!

# Ensure server is stopped when this script exits (including Ctrl+C)
trap 'kill "$SERVER_PID" 2>/dev/null' EXIT

# Wait until the server is reachable, then open the browser
until curl -s "http://127.0.0.1:8000/" >/dev/null; do
	sleep 0.2
done
open "http://127.0.0.1:8000/"

# Keep script attached to the server process
wait "$SERVER_PID"
