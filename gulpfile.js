var gulp = require('gulp');

var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var stripDebug = require('gulp-strip-debug');
var eslint = require('gulp-eslint');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sourceMaps = require('gulp-sourcemaps');

var isProduction = (argv.prod) ? (true) : (false);  // gulp --prod

var config = {
    port: 1337,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './app/*.html',
        imagesFavIcon: './app/img/favicon.ico',
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

gulp.task('es-lint', function () {
    return gulp
        .src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('js', ['es-lint'], function () {
    return browserify(config.paths.mainJS, { debug: !isProduction }) // this will not set environment flag for react, check into that ...
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

gulp.task('images', function () {
    // Dont need to return since no other task is dependant of this task, the same goes for others ...
    gulp.src(config.paths.imagesFavIcon)
        .pipe(gulp.dest(config.paths.bld))
});



gulp.task('watch', function () {
    if (isProduction) { return; }

    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.less, ['less']);
});

gulp.task('default', ['html', 'js', 'less', 'images', 'connect', 'watch']);