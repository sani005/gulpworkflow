var gulp = require('gulp'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    tinypng = require('gulp-tinypng-compress'),
    webp = require('gulp-webp'),
    image = require('gulp-image'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('images', function() {
    return gulp.src('src/images/**/*.{png,jpg,jpeg}')
        //.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        //.pipe(imageminJpegtran({ progressive: true })())
        //.pipe(image())
        .pipe(webp())
        .pipe(gulp.dest('dist/assets/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

