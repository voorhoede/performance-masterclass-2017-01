# Use dynamic compression

## Solution

* Set `brotli` `quality` to 4. (is default shrink-ray)
* Set `zlib` `level` to 6. (is default shrink-ray)
* Enable `etag`s by setting `app.set('etag', true)`
* Enable caching by unsetting `cache` and `cacheSize` options.
* Let shrink-ray decide which files to compress by unsetting `filter` option.

See [overview of all changes](https://github.com/voorhoede/front-end-performance-masterclass/commit/cb751dc53afe9dc5f2ed3335129a2617c48204d5).


## Exercise

See [11-dynamic-compression-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/11-dynamic-compression-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).