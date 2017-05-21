var gulp = require('gulp');

var connect = require('gulp-connect');
var browserify = require('browserify');
var envify = require('gulp-envify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var stripDebug = require('gulp-strip-debug');
var uglifyJs = require('gulp-uglify');
var eslint = require('gulp-eslint');

var argv = require('yargs').argv;
var gulpif = require('gulp-if');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var sourceMaps = require('gulp-sourcemaps');

var isProduction = (argv.prod) ? (true) : (false);  // gulp --prod
var environment = {
    NODE_ENV: isProduction ? 'production' : 'development'
};

var config = {
    port: 1337,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './app/*.html',
        imagesFavIcon: './app/img/favicon.ico',
        mainJS: './app/js/app.js',
        js: ['./api/*.js', './app/js/**/*.js'],
        mainLess: './app/less/app.less',
        less: './app/less/**/*.less',
        bld: './bld'
    }
};

gulp.task('es-lint', function () {
    return gulp
        .src(config.paths.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('js', ['es-lint'], function () {
    // debug = true     -- will bundle, will not minify, will create sourcemap back to individual files
    // debug = false    -- will bundle, will minify some, will not create sourcemap, it also seems like it sets React env flag because its not warning for props that do not match propTypes
    // actually process.env.NODE_ENV is undefined, so process.env.NODE_ENV !== 'production' is true, which means debug code runs -- no debug code does not run, maybe it is shimmed in some way
    // lets test setting it here, process.env.NODE_ENV = isProduction ? 'production' : 'development'; , it works in here but stil undefined(?) in source code
    // This works 'https://github.com/tomashanacek/gulp-envify' , NODE_ENV is set to a string , read more here 'https://www.npmjs.com/package/envify'
    // Uglify will minify more
    return browserify(config.paths.mainJS, { debug: !isProduction })
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('app.js'))
        .pipe(buffer())

        .pipe(envify(environment))

        .pipe(gulpif(isProduction, stripDebug()))
        .pipe(gulpif(isProduction, uglifyJs()))
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

gulp.task('watcher', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.less, ['less']);
});

gulp.task('build', ['html', 'js', 'less', 'images']);
gulp.task('default', ['build', 'watcher'], function () {
    connect.server({
        root: ['bld'],
        port: config.port,
        base: config.devBaseUrl
    })
});
