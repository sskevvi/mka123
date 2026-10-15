# Fake mObywatel SPA

This project has been converted into a Single Page Application (SPA) to mimic the native app experience.

## How to use
1. Open `spa_index.html` in your browser.
2. Navigate through the app. You will see a 0.5s loading screen between pages, simulating the native app behavior.
3. The ID card data is preloaded and prioritized.

## Key Features
- **Single Page Architecture**: All "pages" are contained within `spa_index.html`, eliminating page reloads and white flashes.
- **Fake Loader**: A 0.5s loading overlay appears during navigation.
- **Asset Preloading**: Critical assets for the ID card are preloaded for instant rendering.
- **Service Worker**: Updated `sw.js` to cache the SPA and assets for offline use.
- **QR Code**: Functional QR code generation for the "Show QR" feature.

## Files
- `spa_index.html`: The main application file.
- `sw.js`: Service worker for caching.
- `*_files/`: Asset directories (unchanged).
