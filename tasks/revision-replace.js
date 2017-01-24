const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

const baseDir = require('./revision-hash').baseDir;
const manifestFilename = require('./revision-hash').manifestFilename;

return gulp.src(baseDir + '**/*.html')
    .pipe(revReplace({
        manifest: gulp.src(baseDir + manifestFilename)
    }))
    .pipe(gulp.dest(baseDir));