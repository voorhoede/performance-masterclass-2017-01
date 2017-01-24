# Set cache header

## Solution

Set the `Cache-Control` header on the response to a `max-age` of 1 year in seconds.

**Before**:

```js
app.use((req, res, next) => {
  // todo: set cache header to 1 year
  next();
});
```

**After**:
```js
app.use((req, res, next) => {
  const oneYear = 365 * 24 * 60 * 60;
  res.setHeader('Cache-Control', 'max-age=' + oneYear);
  next();
});
```


## Exercise

See [05-caching-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/05-caching-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).