# Precompression - Bonus

* Configure shrink-ray to only compress HTML in [server-optimised.js](server-optimised.js).
* Pre-compress all static files using [tasks/compress.js](tasks/compress.js) (use with `npm run compress`).
* Use custom middleware [lib/use-compressed.js](lib/use-compressed.js) to serve the optimal - brotli or gzip - precompressed file in [server-optimised.js](server-optimised.js).

See [overview of all changes](https://github.com/voorhoede/front-end-performance-masterclass/commit/d680434666278cccae11a8653b67b2512592644b).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).