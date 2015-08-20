var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('scripts', function () {
    gulp.src('src/scripts/*.js')
            .pipe(jshint('.jshintrc'))
    /**
     * gulp-jshint-html-reporter is a simple generator of HTML report for 
     * gulp-jshint that writes its output to a html file which looks pretty
     * If you want the report to be on console, 
     * replace 'gulp-jshint-html-reporter' with 'default'
    **/
            .pipe(jshint.reporter('gulp-jshint-html-reporter', {
                filename: 'src/scripts/jshint-output.html',
                createMissingFolders: false
        }))
            .pipe(concat('main.js'))
            .pipe(gulp.dest('dist/assets/scripts'))
            .pipe(rename({ suffix: '.min' }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/assets/scripts'))
            .pipe(notify({ message: 'Scripts task complete' }));

});

