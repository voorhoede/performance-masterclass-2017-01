# Load CSS async - Bonus

## Solution

* Include [assets/js/vendor/cookie.min.js](src/optimised/assets/js/vendor/cookie.min.js) helper in [_base/layout.html](src/optimised/_base/layout.html).
* Set `fullCssLoaded` cookie to `'/index.css'` on `onloadCSS` in [_base/load-css](src/optimised/_base/load-css.html).
* Pass `fullCssLoaded` cookie to template in [server-optimised.js](server-optimised.js).
* Load `index.css` blocking if cookie matches current stylesheet name (`latestCssLoaded` is true) in [_base/layout.html](src/optimised/_base/layout.html).
* Load `index.css` async if cookie does not match current stylesheet name, by including `load-css.html` in [_base/layout.html](src/optimised/_base/layout.html).

See [overview of all changes](https://github.com/voorhoede/front-end-performance-masterclass/commit/2a1c4ab944d458159bed77355ac6b6d651e49f17).


## Exercise

See [09-load-css-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/09-load-css-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).