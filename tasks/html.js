const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin'); // docs: https://github.com/jonschlinkert/gulp-htmlmin

const baseDir = 'src/optimised/';

gulp.src(baseDir + '**/*.html')
    // minify HTML
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true
    }))
    .pipe(gulp.dest('dist/optimised/'));