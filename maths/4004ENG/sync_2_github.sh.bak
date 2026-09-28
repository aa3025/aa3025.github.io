#!/bin/bash

# Sync script from private GitLab repo (4004ENG-MATLAB) to public GitHub repo (matlab)

set -e

GITLAB_DIR="/Users/aa3025/GitLab/4004ENG-MATLAB"
GITHUB_DIR="/Users/aa3025/GITHUB_COV/matlab"

echo "=========================================================="
echo "🔨 Step 1: Re-encrypting solutions & generating manifest..."
echo "=========================================================="
cd "$GITLAB_DIR"
python3 encrypt_solutions.py

echo ""
echo "=========================================================="
echo "🔄 Step 2: Syncing student-facing web assets to GitHub repo..."
echo "=========================================================="
rsync -av --delete \
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
  --exclude='*.mp3' \
  --exclude='*.gif' \
  --exclude='*.jpg' \
  "$GITLAB_DIR/" "$GITHUB_DIR/"

echo ""
echo "=========================================================="
echo "🔍 Step 3: Staging and committing in GitHub repo..."
echo "=========================================================="
cd "$GITHUB_DIR"
git add -A

if git diff --cached --quiet; then
    echo "ℹ️ No changes detected to commit. GitHub repository is already up-to-date."
    exit 0
fi

COMMIT_MSG="$1"
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update student-facing course website"
fi

git commit -m "$COMMIT_MSG"

echo ""
echo "=========================================================="
echo "🚀 Step 4: Pushing to GitHub Pages..."
echo "=========================================================="
git push

echo ""
echo "=========================================================="
echo "✅ GitHub Pages sync complete!"
echo "=========================================================="
