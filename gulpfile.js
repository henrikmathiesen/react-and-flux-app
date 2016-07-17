var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var argv = require('yargs').argv;

var isProduction = (argv.prod) ? (true) : (false); // gulp --prod

var config = {
    port: 1337,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './app/*.html',
        mainJS: './app/main.js',
        js: './app/**/*.js',
        bld: './bld'
    }
};

gulp.task('connect', function () {
    connect.server({
        root: ['bld'],
        port: config.port,
        base: config.devBaseUrl
    })
});

gulp.task('js', function () {
    browserify(config.paths.mainJS, { debug: !isProduction })
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.bld));
});

gulp.task('html', function () {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.bld))
});

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'connect', 'watch']);