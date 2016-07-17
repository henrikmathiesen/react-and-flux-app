var gulp = require('gulp');

var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var stripDebug = require('gulp-strip-debug');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sourceMaps = require('gulp-sourcemaps');

var isProduction = (argv.prod) ? (true) : (false); // gulp --prod

var config = {
    port: 1337,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './app/*.html',
        mainJS: './app/js/app.js',
        js: './app/js/**/*.js',
        mainLess: './app/less/app.less',
        less: './app/less/**/*.less',
        bld: './bld'
    }
};

gulp.task('connect', function () {
    if (isProduction) { return; }

    connect.server({
        root: ['bld'],
        port: config.port,
        base: config.devBaseUrl
    })
});

gulp.task('js-hint', function () {
    return gulp
        .src(config.paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('js', ['js-hint'], function () {
    return browserify(config.paths.mainJS, { debug: !isProduction })
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulpif(isProduction, stripDebug()))
        .pipe(gulp.dest(config.paths.bld));
});

gulp.task('less', function () {
    return gulp
        .src(config.paths.mainLess)
        .pipe(gulpif(!isProduction, sourceMaps.init()))

        .pipe(less())
        .pipe(autoprefix({ browsers: ['last 3 versions'] }))

        .pipe(gulpif(isProduction, minifyCss()))

        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(config.paths.bld));
});

gulp.task('html', function () {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.bld))
});

gulp.task('watch', function () {
    if (isProduction) { return; }

    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.less, ['less']);
});

gulp.task('default', ['html', 'js', 'less', 'connect', 'watch']);