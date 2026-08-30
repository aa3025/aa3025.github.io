#!/usr/bin/env python3
"""
IPTV Playlist Updater & Compiler
Syncs latest live streams from https://github.com/iptv-org/iptv into local playlist.m3u
Supports fetching from iptv-org GitHub CDN or compiling from local cloned repo.
"""

import os
import sys
import urllib.request
import re
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
LOCAL_PLAYLIST_FILE = SCRIPT_DIR / "playlist.m3u"
LOCAL_IPTV_ORG_REPO = SCRIPT_DIR.parent.parent / "iptv-org"
if not LOCAL_IPTV_ORG_REPO.exists():
    LOCAL_IPTV_ORG_REPO = SCRIPT_DIR.parent / "iptv-org"

CDN_BASE_URL = "https://iptv-org.github.io/iptv"
MASTER_FEED_URL = f"{CDN_BASE_URL}/index.m3u"

def fetch_url(url, timeout=30):
    print(f"Fetching: {url} ...")
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (NovaIPTV/2.0; +https://github.com/aa3025/aa3025.github.io)"}
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode('utf-8', errors='replace')

def parse_m3u_entries(content):
    """Parses raw M3U into list of dict objects."""
    entries = []
    lines = content.splitlines()
    current_meta = None
    current_extra_lines = []

    for line in lines:
        line_clean = line.strip()
        if not line_clean:
            continue
        if line_clean.startswith("#EXTM3U"):
            continue
        elif line_clean.startswith("#EXTINF:"):
            current_meta = line_clean
            current_extra_lines = []
        elif line_clean.startswith("#"):
            current_extra_lines.append(line_clean)
        else:
            # Stream URL line
            if current_meta:
                entries.append({
                    "inf": current_meta,
                    "extra": current_extra_lines,
                    "url": line_clean
                })
                current_meta = None
                current_extra_lines = []
    return entries

def update_from_cdn():
    """Download full master playlist from iptv-org GitHub CDN."""
    try:
        content = fetch_url(MASTER_FEED_URL)
        entries = parse_m3u_entries(content)
        print(f"Retrieved {len(entries)} channels from iptv-org CDN.")

        # Write output playlist
        with open(LOCAL_PLAYLIST_FILE, "w", encoding="utf-8") as f:
            f.write('#EXTM3U x-tvg-url="https://worker-9dd4.onrender.com/guide.xml.gz"\n')
            for item in entries:
                f.write(f"{item['inf']}\n")
                for ex in item['extra']:
                    f.write(f"{ex}\n")
                f.write(f"{item['url']}\n")

        print(f"✅ Successfully updated {LOCAL_PLAYLIST_FILE} with {len(entries)} channels!")
    except Exception as e:
        print(f"❌ Error updating from CDN: {e}", file=sys.stderr)

def compile_from_local_repo():
    """Compile custom playlist from local cloned iptv-org repository."""
    streams_dir = LOCAL_IPTV_ORG_REPO / "streams"
    if not streams_dir.exists():
        print(f"⚠️ Local cloned streams directory not found at {streams_dir}. Falling back to CDN update...")
        update_from_cdn()
        return

    print(f"Scanning local streams in {streams_dir} ...")
    m3u_files = sorted(streams_dir.glob("*.m3u"))
    total_entries = 0
    seen_urls = set()

    with open(LOCAL_PLAYLIST_FILE, "w", encoding="utf-8") as out:
        out.write('#EXTM3U x-tvg-url="https://worker-9dd4.onrender.com/guide.xml.gz"\n')
        for m3u in m3u_files:
            try:
                text = m3u.read_text(encoding="utf-8", errors="replace")
                entries = parse_m3u_entries(text)
                for item in entries:
                    if item["url"] not in seen_urls:
                        seen_urls.add(item["url"])
                        out.write(f"{item['inf']}\n")
                        for ex in item['extra']:
                            out.write(f"{ex}\n")
                        out.write(f"{item['url']}\n")
                        total_entries += 1
            except Exception as ex:
                print(f"Error reading {m3u.name}: {ex}", file=sys.stderr)

    print(f"✅ Successfully compiled {total_entries} unique channels from local repository into {LOCAL_PLAYLIST_FILE}!")

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--local":
        compile_from_local_repo()
    else:
        # Default: CDN update
        update_from_cdn()
