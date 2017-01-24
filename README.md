# Use dynamic compression

## Exercise

* Configure the `brotli` `quality` in [server-optimised.js](server-optimised.js) for fastest response time and test in Chrome.
* Configure the `zlib` (gzip) `level` in [server-optimised.js](server-optimised.js) for the fastest response time and test in Safari.

Compare "waiting" (time to first byte) and "content download" times for different `quality`/`level` and different network conditions (throttling).


## Solution

See [11-dynamic-compression-solution](https://github.com/voorhoede/front-end-performance-masterclass/tree/11-dynamic-compression-solution).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).