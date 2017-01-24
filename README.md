# Load fonts async - Bonus

## Solution

* Include [assets/js/vendor/cookie.min.js](src/optimised/assets/js/vendor/cookie.min.js) helper in [_base/layout.html](src/optimised/_base/layout.html).
* Set `fontsLoaded` cookie on `fontsLoaded` in [_base/load-fonts.html](src/optimised/_base/load-fonts.html).
* Pass `fontsLoaded` cookie to template in [server-optimised.js](server-optimised.js).
* Set `.fonts-loaded` on `<html>` if `fontsLoaded` cookie is set in [_base/layout.html](src/optimised/_base/layout.html).

See [overview of all changes](https://github.com/voorhoede/front-end-performance-masterclass/commit/3fef23121f8f363dc946c706d98c88312eb5007f).


## Exercise

See [07-load-fonts-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/07-load-fonts-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).