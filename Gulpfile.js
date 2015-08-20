// Include Gulp and all required plugins
var gulp = require('gulp');
var requireDir = require('require-dir');
requireDir('./gulp-tasks');
/**
 * To reload page on file change 
 */
var browserSync = require('browser-sync').create();

/**
 * Clean Task

gulp.task('clean', function() {
    del(['dist/assets/styles', 'dist/assets/scripts', 'dist/assets/images']);
});
 */


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8081,
        /**
         * Open site in multiple browsers
         */
        browser: [
            /** Error - Not opening chrome **/
                "google chrome"

        ],
        /**
         * Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
         */
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        }
    });
    gulp.watch(['dist/**']).on('change', browserSync.reload);
    gulp.watch(['*.html', 'src/scripts/jshint-output.html']).on('change', browserSync.reload);

});

gulp.task('default', ['styles', 'scripts', 'images', 'serve'], function () {
    // Watch less files
    gulp.watch('src/styles/**/*.less', ['styles']);

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('src/images/**/*.{png,jpg,gif}', ['images']);

});

/**
 *  Static Server - Testing Purpose
 */


/**
 * Dynamic Server

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://icisnglocal/"
    });
});
 */