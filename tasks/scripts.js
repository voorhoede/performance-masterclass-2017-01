const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify'); // docs: https://www.npmjs.com/package/gulp-uglify

const baseDir = 'src/optimised/';

gulp.src([
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
=======
        baseDir + '/assets/js/vendor/jquery.min.js',
>>>>>>> 11-dynamic-compression-exercise
        baseDir + '/dist/js/bootstrap.js',
        baseDir + '/assets/js/docs.min.js',
        baseDir + '/assets/js/ie10-viewport-bug-workaround.js'
    ])
    .pipe(concat('index.js'))
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
    // todo: minify JS
    //.pipe()
=======
    // minify JS
    .pipe(uglify())
>>>>>>> 11-dynamic-compression-exercise
    .pipe(gulp.dest('dist/optimised/'));