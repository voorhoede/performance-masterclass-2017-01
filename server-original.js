const express = require('express');
const path = require('path');
const redirectIndices = require('./lib/redirect-indices');

const app = express();
const baseDir = 'dist/original';
const port = process.env.PORT || 3003;

app.set('etag', false);
app.use(redirectIndices);

app.use('/', express.static(path.join(__dirname, baseDir), { etag: false }));

app.listen(port, (err) => {
    err ? console.error(err) : console.log(`original app running on http://localhost:${port}`);
});