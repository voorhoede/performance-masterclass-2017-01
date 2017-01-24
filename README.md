# Load JS

## Solution

* [Concatenate all scripts into `index.js`](https://github.com/voorhoede/front-end-performance-masterclass/commit/3fd3061b09d73d4309b984ccdc11ca393fb362ad#diff-4d5803cdb7bfcf2fd62016ff3d1399fbR8).
* [Load `index.js` in head using `defer`](https://github.com/voorhoede/front-end-performance-masterclass/commit/3fd3061b09d73d4309b984ccdc11ca393fb362ad#diff-1888604e8c00eec6364a1f4af8b7ba5eR10).

This prevents `defer` race issues in <IE10 and prevents queueing of multiple scripts.


## Exercise

See [08-load-js-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/08-load-js-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).