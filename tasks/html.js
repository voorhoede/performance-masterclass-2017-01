const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin'); // docs: https://github.com/jonschlinkert/gulp-htmlmin

const baseDir = 'src/optimised/';

gulp.src(baseDir + '**/*.html')
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
    // todo: minify HTML
    //.pipe()
=======
    // minify HTML
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        minifyCSS: true
    }))
>>>>>>> 11-dynamic-compression-exercise
    .pipe(gulp.dest('dist/optimised/'));