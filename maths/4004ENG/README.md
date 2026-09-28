# 4004ENG MATLAB PC Labs

Static website and content pipeline for the 4004ENG MATLAB PC Labs course.

This repository serves weekly learning material, problem statements, template MATLAB files, and encrypted worked solutions.

## Project Goals
- Keep learning content easy to edit and review.
- Keep worked solutions out of git history in plaintext form.
- Generate a single manifest-driven site experience.
- Support local development with a simple script-based workflow.

## High-Level Architecture

### Frontend
- `index.html` - main SPA shell
- `app.js` - routing, rendering, tabs, downloads, decryption flow
- `index.css` - styling

### Data Layer
- `data/manifest.json` - website navigation/content map
- `data/week0` to `data/week5` - markdown and template MATLAB files
- `data/weekN/probN_sol.m` - encrypted worked solutions (published form)

### Sensitive Authoring Sources
- `solutions/weekN/probN_sol.m` - plaintext worked solutions (gitignored)
- `passwords.json` - per-week passwords (gitignored)

### Build/Sync Script
- `encrypt_solutions.py` - active script used to:
  1. read plaintext solutions from `solutions/`
  2. encrypt and write to `data/weekN/probN_sol.m`
  3. regenerate `data/manifest.json` by scanning `data/weekN/`
  4. write obfuscated password cache to `data/utils/.sys_cache.dat`

## Repository Layout (Key Paths)

- `data/`
  - `manifest.json`
  - `utils/.sys_cache.dat`
  - `week0/`
    - `intro.md`
    - `matlab_core_assignment.md`
  - `week1/ ... week5/`
    - `intro.md`
    - `prob1.md ... prob5.md`
    - `prob1.m ... prob5.m`
    - `prob1_sol.m ... prob5_sol.m` (encrypted)
- `solutions/` (gitignored)
  - `week1/ ... week5/`
    - `prob1_sol.m ... prob5_sol.m` (plaintext)
- `encrypt_solutions.py` (gitignored by current policy)
- `start_dev_server.sh`
- `sync_2_github.sh`

## Content and Naming Conventions

### Problem Assets per Week
For each week folder in `data/weekN/`:
- Problem statement markdown: `probN.md`
- Student template MATLAB: `probN.m`
- Published encrypted solution: `probN_sol.m`

### Intro Pages
- Week 0:
  - Week title in manifest: `Introduction`
  - Main section title: `Introduction and MATLAB Onboarding`
  - Additional page: `MATLAB Core Assignment`
- Weeks 1 to 5:
  - Intro section plus five problem sections

## Local Development Workflow

### 1) Regenerate encrypted solutions + manifest
Run:

```bash
python3 encrypt_solutions.py
```

### 2) Start local server
Run:

```bash
./start_dev_server.sh
```

The script:
- runs `encrypt_solutions.py`
- starts local server on `http://127.0.0.1:8000/`
- waits until server is reachable
- opens browser automatically

### 3) Optional: sync helper
Run:

```bash
./sync_2_github.sh "your commit message"
```

This helper runs encryption/manifest generation, stages files, commits, and pushes.

## Authoring Workflow (Recommended)

### Editing learning content
- Edit markdown directly in `data/weekN/`.
- Edit template MATLAB files directly in `data/weekN/`.

### Editing worked solutions
- Edit plaintext solutions in `solutions/weekN/probN_sol.m`.
- Re-run `python3 encrypt_solutions.py`.

### Verification pass before commit
- Ensure `data/manifest.json` updated correctly.
- Check target week pages in browser.
- Confirm solution unlock/download still works.
- Confirm no plaintext solutions were staged.

## Security and Git Policy

### Must remain gitignored
- `solutions/`
- `passwords.json`
- legacy/source-only internal folders as configured

### Important
- Do not commit plaintext solution files.
- Do not add sensitive credentials to tracked files.

## Recent Curriculum Updates Included
- Week 3 intro audited and expanded.
- Week 4 intro audited and expanded.
- Week 5 intro audited and expanded.
- Visualisation extension tasks added to selected problem briefs.
- Matching template and solution updates applied for those extensions.
- Week 0 onboarding and assignment guidance separated into distinct pages.

## Troubleshooting

### Start script exits quickly
If `start_dev_server.sh` exits with non-zero status:
- check whether port 8000 is already in use
- run `python3 encrypt_solutions.py` manually to confirm script health
- run `python3 -m http.server 8000` manually to confirm local server starts

### Manifest seems stale
- run `python3 encrypt_solutions.py` again
- verify expected section/file entries in `data/manifest.json`

### Solution tab fails to decrypt
- verify corresponding plaintext solution exists in `solutions/weekN/`
- regenerate encrypted files with `python3 encrypt_solutions.py`
- verify password data source is present and valid (`passwords.json`)

## Maintenance Notes
- The old `build.py` workflow is retired and should not be reintroduced.
- Keep all navigation/content path logic manifest-driven.
- Prefer small, auditable content updates and re-run encryption after each solution change.
