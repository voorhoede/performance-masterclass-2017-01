const gulp = require('gulp');
const filter = require('gulp-filter');
const rev = require('gulp-rev');
//const revdel = require('gulp-rev-delete-original');
const override = require('gulp-rev-css-url');

const baseDir = 'dist/optimised/';
const manifestFilename = 'rev-manifest.json';
const hashPattern = /.*-[0-9a-f]{10}\..*/;

gulp.src([
        baseDir + '**/*.{css,js}',
        baseDir + '**/*.{gif,jpg,png,svg,webp}',
        baseDir + '**/*.{woff,woff2}'
    ])
    .pipe(filter(file => !hashPattern.test(file.path))) // don't revision revisioned files
    .pipe(filter(file => !file.path.endsWith('/critical.css')))
    .pipe(rev())
    .pipe(override())
    //.pipe(revdel())
    .pipe(gulp.dest(baseDir))
    .pipe(rev.manifest(manifestFilename))
    .pipe(gulp.dest(baseDir));

module.exports = { baseDir, manifestFilename };