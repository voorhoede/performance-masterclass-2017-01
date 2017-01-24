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
    // todo: minify CSS
    //.pipe()
    .pipe(gulp.dest('dist/optimised/'));