# Load fonts async

## Solution

* Change [dist/css/fonts.css](src/optimised/dist/css/fonts.css) to use system font as baseline.
* Extend [dist/css/fonts.css](src/optimised/dist/css/fonts.css) to use `source_sans_pro` on `.fonts-loaded`.
* Change [_base/load-fonts.html](src/optimised/_base/load-fonts.html) to add `.fonts-loaded` on `<html>` after all `source_sans_pro` font variants are loaded using [FontFaceObserver](https://github.com/bramstein/fontfaceobserver#how-to-use).

## Exercise

See [07-load-fonts-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/07-load-fonts-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).