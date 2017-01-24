# Use critical CSS - Bonus

## Solution

* Generate critical CSS for each page automatically based on a static version of each page. See [tasks/critical.css](tasks/critical.css) and `critical` script in [package.json](package.json).
* Inline generated critical CSS for each page using `{% include name + 'critical.css' %}` in [_base/load-css.html](src/optimised/_base/load-css.html).

See [overview of all changes](https://github.com/voorhoede/front-end-performance-masterclass/commit/e4cf2a0b8f4cb063d4f8eed32ea757bca21ec83c).


## Exercise

See [10-critical-css-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/10-critical-css-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).