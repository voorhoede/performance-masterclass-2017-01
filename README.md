# Use critical CSS

## Solution

* Run `npm install` to install new dependencies.
* Expose local server to the world wide web using `npm run start:critical`.
* Generate critical CSS using the online [Critical Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/) with your `ngrok` url.
* Include the generated CSS in [_base/load-css.html](src/optimised/_base/load-css.html).

See [overview of all changes](https://github.com/voorhoede/front-end-performance-masterclass/commit/1c10fa351968d1ebb281782d1288398aa59df628).


## Exercise

See [10-critical-css-exercise](https://github.com/voorhoede/front-end-performance-masterclass/tree/10-critical-css-exercise).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/front-end-performance-masterclass).