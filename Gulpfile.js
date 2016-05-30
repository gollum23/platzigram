/**
 * Created by gollum23 on 30/05/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('styles', function () {
    gulp
        .src('./source/sass/index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('assets', function () {
    gulp
        .src('assets/**')
        .pipe(gulp.dest('public'));
});

gulp.task('scripts', function () {
    browserify('./source/js/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public/js/'))
});

gulp.task('default', ['styles', 'assets', 'scripts']);