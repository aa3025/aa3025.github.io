#!/usr/bin/env bash
# Standalone JS IPTV Web Player Launch Script
set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"

PORT="${1:-8080}"

# Find free port
while lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; do
    PORT=$((PORT+1))
done

echo "Starting Static Server for Nova IPTV on port $PORT..."
python3 -m http.server "$PORT" &
SERVER_PID=$!

sleep 0.5

# Open browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    open "http://localhost:$PORT/index.html" || true
elif command -v xdg-open &> /dev/null; then
    xdg-open "http://localhost:$PORT/index.html" || true
fi

echo "Player running at: http://localhost:$PORT/index.html"
echo "Press Ctrl+C to stop."
wait $SERVER_PID
