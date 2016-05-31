/**
 * Created by gollum23 on 30/05/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

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

function compile(watch) {
    var bundle = watchify(browserify('./source/js/index.js'));

    function rebundle() {
        bundle
            .transform(babel)
            .bundle()
            .on('error', function (err) {
                console.log(err);
                this.emit('end');
            })
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public/js/'))
    }

    if (watch) {
        bundle.on('update', function () {
            console.log('--> Bundling...');
            rebundle();
        })
    }

    rebundle()
}

gulp.task('build', function () {
    return compile();
});

gulp.task('watch', function () {
    return compile(true);
});

gulp.task('default', ['styles', 'assets', 'build']);