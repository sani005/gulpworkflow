var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();


gulp.task('styles', function () {
        gulp.src('src/styles/**/*.less')
            .pipe(less({ compress: true }))
            .pipe(autoprefixer('last 10 versions', 'ie 9'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(minifycss({ keepBreaks: false }))
            .pipe(gulp.dest('dist/assets/styles'))
            .pipe(browserSync.stream())
            .pipe(notify({ message: 'Styles task complete' }));
});

