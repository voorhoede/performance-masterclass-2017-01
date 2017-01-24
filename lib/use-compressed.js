const accepts = require('accepts');
const mime = require('mime');
const fs = require('fs');
const path = require('path');

const baseDir = 'dist/optimised/';
const extByEncoding = {
    'br': 'br',
    'gzip': 'gz'
};

module.exports = function useCompressed(req, res, next) {
    const acceptsEncoding = (encoding) => accepts(req).encodings().indexOf(encoding) >= 0;
    const encoding = acceptsEncoding('br') ? 'br' : acceptsEncoding('gzip') ? 'gzip' : false;

    if (encoding) {
        const ext = '.' + extByEncoding[encoding];
        const filename = path.join(__dirname, '/../', baseDir, req.originalUrl + ext);
        const type = mime.lookup(req.originalUrl);
        if (fs.existsSync(filename)) {
            req.url = req.url + ext;
            res.setHeader('Content-Encoding', encoding);
            res.setHeader('Content-Type', type);
        }
        next();
    } else {
        console.log('serve uncompressed file (fallthrough)');
        next();
    }
};