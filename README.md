# Use image `srcset`

## Solution

* Use `srcset` with a list of comma separated `url` (eg. `expo-lyft-374x281.jpg`) and width in pixel values (eg. `374w`).
* Set `sizes` based on the breakpoint (at `768px`) in the page.

**Before**:

```html
<img alt="Lyft" src="/assets/img/expo-lyft.jpg" class="img-responsive">
```

**After**:

```html
<img alt="Lyft" src="/assets/img/expo-lyft.min.jpg"
     srcset="/assets/img/expo-lyft-374x281.jpg 374w,
             /assets/img/expo-lyft-290x218.jpg 290w,
             /assets/img/expo-lyft-186x139.jpg 186w"
     sizes="(min-width: 768px) 25vw, 50vw"
     class="img-responsive">
```


## Exercise

See [03-srcset-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/01-srcset-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).