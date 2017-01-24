const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin'); // docs: https://github.com/jonschlinkert/gulp-htmlmin

const baseDir = 'src/optimised/';

gulp.src(baseDir + '**/*.html')
    // todo: minify HTML
    //.pipe()
    .pipe(gulp.dest('dist/optimised/'));