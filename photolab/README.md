# Photolab Single-File Gallery

**Live Demo:** [https://aa3025.github.io/photolab/](https://aa3025.github.io/photolab/)

A highly stylized, fully client-side single-page photo gallery designed to emulate the look and feel of a physical darkroom contact sheet and film projector.

## Features
- **Zero-Dependency Single File**: The entire application (HTML, CSS, JS, Audio) is bundled into a single `index.html` file.
- **Physical Film Aesthetic**: Authentic contact sheet layout with sprocket holes, negative overlays, and film strip labels.
- **Projector Lightbox**: A beautifully animated horizontal strip view for viewing full-resolution images.
- **Motorized Rewind & DSLR Audio**: Features a physical camera shutter sound on navigation and an 8-second motorized fast-rewind animation with authentic audio.
- **Hardware-Accelerated UI**: Highly optimized lazy-loading using `IntersectionObserver`, and fluid `transform`-based animations.

## How to Deploy

To deploy or update the gallery with your own photos:

1. **Prepare your images**:
   Create a `photos/` directory in this folder and place your high-resolution images inside it.

2. **Generate the Gallery**:
   Run the Python compiler script:
   ```bash
   python3 compile_gallery.py
   ```
   This script will:
   - Read all images from the `photos/` directory.
   - Automatically generate compressed, base64-encoded `WEBP` thumbnails for ultra-fast initial loading.
   - Inject the image metadata directly into `index.html`.

3. **Test Locally**:
   You can run the included Python server to test the gallery locally before deploying:
   ```bash
   python3 server.py
   ```
   Open `http://localhost:8000` in your browser.

4. **Publish**:
   Because the entire application runs natively in the browser without any backend, simply push the contents of this folder to any static web host (like GitHub Pages)!

   *Note: Ensure you do not commit your original `photos/` or `thumbnails/` folder to Git to save repository space. The `.gitignore` is already configured to prevent this.*
