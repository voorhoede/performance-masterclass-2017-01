const express = require('express');
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
=======
const cookieParser = require('cookie-parser');
>>>>>>> 11-dynamic-compression-exercise
const nunjucks = require('nunjucks');
const path = require('path');
const routeStatic = require('./lib/route-static');
const redirectIndices = require('./lib/redirect-indices');
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
=======
const shrinkRay = require('shrink-ray');
>>>>>>> 11-dynamic-compression-exercise

const app = express();
const baseDir = 'dist/optimised';
const port = process.env.PORT || 3004;

app.set('etag', false);
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7

// static routes
app.use(routeStatic);
=======
app.use(cookieParser());

app.use(shrinkRay({
    // disable caching of compressed files to get consistent responses during development
    cache: () => false,
    cacheSize: false,
    // compress all the things
    filter: () => true,
    // todo: find the optimal quality/level
    brotli: {
        quality: 1 // between 1 and 11
    },
    zlib: {
        level: 1 // between 1 and 9
    }
}));

// static routes
app.use(routeStatic);
app.use('/static', (req, res, next) => {
    // simply cache all static files, simpler for development
    const oneYear = 365 * 24 * 60 * 60;
    res.setHeader('Cache-Control', 'max-age=' + oneYear + ', immutable');
    next();
});
>>>>>>> 11-dynamic-compression-exercise
app.use('/static', express.static(path.join(__dirname, baseDir), { etag: false, lastModified: false }));

// dynamic pages
app.use(redirectIndices);
nunjucks.configure(baseDir, {
    autoescape: true,
    express: app,
    watch: true
});
app.get('*', (req, res, next) => {
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
    res.render(path.join('./', req.url, 'index.html'), {});
=======
    res.render(path.join('./', req.url, 'index.html'), {
        cssLoaded: req.cookies.fullCssLoaded,
        fontsLoaded: req.cookies.fontsLoaded,
        name: req.url.substr(1)
    });
>>>>>>> 11-dynamic-compression-exercise
});

app.listen(port, (err) => {
    err ? console.error(err) : console.log(`optimised app running on http://localhost:${port}`);
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
});

=======
});
>>>>>>> 11-dynamic-compression-exercise
