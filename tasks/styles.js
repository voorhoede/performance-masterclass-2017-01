const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano'); // docs: https://www.npmjs.com/package/gulp-cssnano

const baseDir = 'src/optimised/';

gulp.src([
        baseDir + '/dist/css/fonts.css',
        baseDir + '/dist/css/bootstrap.css',
        baseDir + '/assets/css/src/docs.css'
    ])
    .pipe(concat('index.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
<<<<<<< e439bd28434ced780bf366f7892dec0c85c680c7
    // todo: minify CSS
    //.pipe()
=======
    // minify CSS
    .pipe(cssnano({
        discardComments: {
            removeAll: true
        }
    }))
>>>>>>> 11-dynamic-compression-exercise
    .pipe(gulp.dest('dist/optimised/'));