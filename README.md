# Front-end Performance Masterclass

## Quick start

This project requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/).

After installing dependencies using `npm install` the following scripts are available on all exercise branches:

`npm run ...` | Description
---|---
`build` | Copies and optimises files from `src/optimised/` to `dist/optimised/`.
`start` | Starts an [Express.js](http://expressjs.com/) server on `http://localhost:3004`.
`watch` | Watches for file changes and triggers relevant (sub) build tasks.

More (sub) tasks are available in [package.json > scripts](package.json).


## Setup

```
src/
    ├── original/     <-- copy of getbootstrap source with small changes.
    └── optimised/    <-- working directory for this masterclass, based on original.
        └── _base/    <-- templates shared between pages.

dist/
    ├── original/     <-- copy of src/original/, generated via `npm run copy:original`.
    └── optimised/    <-- optimised version of src/optimised/, generated via `npm run build`.
    
tasks/                <-- build tasks called from `package.json`.

server-original.js    <-- serves `dist/original/` on `localhost:3003`.
server-optimised.js   <-- serves `dist/optimised/` on `localhost:3004`.
```


## Exercises

* [01 - Minify HTML, CSS, JS](https://github.com/voorhoede/front-end-performance-masterclass/tree/01-minify-exercise)
* [02 - Subset fonts](https://github.com/voorhoede/front-end-performance-masterclass/tree/02-subset-fonts-exercise)
* [03 - Use image `srcset`](https://github.com/voorhoede/front-end-performance-masterclass/tree/03-srcset-exercise)
* [04 - Use `picture` elements](https://github.com/voorhoede/front-end-performance-masterclass/tree/04-picture-exercise)
* [05 - Set cache header](https://github.com/voorhoede/front-end-performance-masterclass/tree/05-caching-exercise)
* [06 - Cache revisioned files only](https://github.com/voorhoede/front-end-performance-masterclass/tree/06-revisioning-exercise)
* [07 - Load fonts async](https://github.com/voorhoede/front-end-performance-masterclass/tree/07-load-fonts-exercise)
* [08 - Load JS](https://github.com/voorhoede/front-end-performance-masterclass/tree/08-load-js-exercise)
* [09 - Load CSS async](https://github.com/voorhoede/front-end-performance-masterclass/tree/09-load-css-exercise)
* [10 - Use critical CSS](https://github.com/voorhoede/front-end-performance-masterclass/tree/10-critical-css-exercise)
* [11 - Use dynamic compression](https://github.com/voorhoede/front-end-performance-masterclass/tree/11-dynamic-compression-exercise)
* [12 - Precompression](https://github.com/voorhoede/front-end-performance-masterclass/tree/12-precompression)

Solutions are linked from each individual exercise.

