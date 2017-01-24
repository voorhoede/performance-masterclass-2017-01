# Cache revisioned files only

## Solution

Match request URL against the `hashPattern`.

**Before**:

```js
app.use((req, res, next) => {
    // only set caching header on hashed files
    const hashPattern = /.*-[0-9a-f]{10}\..*/;
    const isHashedFilename = true; // todo: change condition
    if (isHashedFilename) {
        const oneYear = 365 * 24 * 60 * 60;
        res.setHeader('Cache-Control', 'max-age=' + oneYear);
    }
    next();
});
```

**After**:

```js
app.use((req, res, next) => {
    // only set caching header on hashed files
    const hashPattern = /.*-[0-9a-f]{10}\..*/;
    const isHashedFilename = hashPattern.test(req.url);
    if (isHashedFilename) {
        const oneYear = 365 * 24 * 60 * 60;
        res.setHeader('Cache-Control', 'max-age=' + oneYear + ', immutable');
    }
    next();
});
```


## Exercise

See [06-revisioning-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/06-revisioning-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).