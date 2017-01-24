# Load fonts async

## Solution

* Change [dist/css/fonts.css](src/optimised/dist/css/fonts.css) to [use system font as baseline](https://github.com/voorhoede/front-end-performance-masterclass/commit/46f851daac305777cad2c2a5ce94cf1264dc3278#diff-4bf3a4c4398040d583133eb763daf58dR2).
* Extend [dist/css/fonts.css](src/optimised/dist/css/fonts.css) to [use `source_sans_pro` on `.fonts-loaded`](https://github.com/voorhoede/front-end-performance-masterclass/commit/46f851daac305777cad2c2a5ce94cf1264dc3278#diff-4bf3a4c4398040d583133eb763daf58dR5).
* Change [_base/load-fonts.html](src/optimised/_base/load-fonts.html) to [add `.fonts-loaded` on `<html>` after all `source_sans_pro` font variants are loaded](https://github.com/voorhoede/front-end-performance-masterclass/commit/46f851daac305777cad2c2a5ce94cf1264dc3278#diff-61fee0a90002258fd6ce9a0184263183R17).

## Exercise

See [07-load-fonts-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/07-load-fonts-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).