# Load CSS async

## Solution

* Change [_base/load-css.html](src/optimised/_base/load-css.html) to [load `/index.css` async for JS user-agents using `loadCSS`](https://github.com/voorhoede/front-end-performance-masterclass/commit/8d695afd3ce5951a640d5a339fdacd15675bf276#diff-a92f0909500724db2cc19dfbd78c096cR4).
* Change [_base/load-css.html](src/optimised/_base/load-css.html) to [load `/index.css` blocking for non-JS user-agents](https://github.com/voorhoede/front-end-performance-masterclass/commit/8d695afd3ce5951a640d5a339fdacd15675bf276#diff-a92f0909500724db2cc19dfbd78c096cR1).


## Exercise

See [09-load-css-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/09-load-css-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).