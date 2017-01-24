const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const routeStatic = require('./lib/route-static');
const redirectIndices = require('./lib/redirect-indices');

const app = express();
const baseDir = 'dist/optimised';
const port = process.env.PORT || 3004;

app.set('etag', false);
app.use((req, res, next) => { res.removeHeader('X-Powered-By'); next(); });

// static routes
app.use(routeStatic);
app.use('/static', (req, res, next) => {
    // simply cache all static files, simpler for development
    const oneYear = 365 * 24 * 60 * 60;
    res.setHeader('Cache-Control', 'max-age=' + oneYear + ', immutable');
    next();
});
app.use('/static', express.static(path.join(__dirname, baseDir), { etag: false, lastModified: false }));

// dynamic pages
app.use(redirectIndices);
nunjucks.configure(baseDir, {
    autoescape: true,
    express: app,
    watch: true
});
app.get('*', (req, res, next) => {
    res.render(path.join('./', req.url, 'index.html'), {});
});

app.listen(port, (err) => {
    err ? console.error(err) : console.log(`optimised app running on http://localhost:${port}`);
});