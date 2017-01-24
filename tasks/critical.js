const critical = require('critical');
const fs = require('fs');
const globby = require('globby');
const nunjucks = require('nunjucks');
const path = require('path');
const rimraf = require('rimraf');

const baseDir = 'dist/optimised/';
const tempFilename = 'index-tmp.html';

globby([
    baseDir + '**/index.html',
    '!' + baseDir + '_*/**/*.html'
]).then(paths => {
    renderTempHtml(paths)
        .then((fileNames) => generateCritical(fileNames))
        .then(() => removeTempHtml())
});

function renderTempHtml(fileNames) {
    nunjucks.configure(baseDir);

    return Promise.all(fileNames.map(fileName => {
        const relativeFileName = path.relative(baseDir, fileName);

        return new Promise((resolve, reject) => {
            return nunjucks.render(relativeFileName, { forceRepeatView: 'true' }, (err, html) => {
                if (err) {
                    reject(err);
                } else {
                    const outputFolder = path.dirname(fileName);
                    const outputFile = path.join(outputFolder, tempFilename);
                    fs.writeFile(outputFile, html, err => err ? reject(err) : resolve(outputFile));
                }
            })
        });
    }));
}

function generateCritical(fileNames) {
    return Promise.all(fileNames.map(fileName => {
            const outputPath = path.dirname(fileName);
            console.log('generating critical css for: ' + fileName);
            return critical.generate({
                src: 'index-tmp.html',
                base: outputPath,
                css: [baseDir + 'index.css'],
                dest: 'critical.css',
                minify: true,
                ignore: ['@font-face', /\.fonts-loaded(\s)*.*/],
                width: 1280,
                height: 1000
            });
        })
    )
}

function removeTempHtml() {
    return globby(baseDir + '**/' + tempFilename)
        .then((fileNames) => Promise.all(fileNames.map(fileName => {
            return new Promise((resolve, reject) => {
                fs.unlink(fileName, (err) => err ? reject(err) : resolve(fileName));
            })
        })));
}