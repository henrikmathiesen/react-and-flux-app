var gulp = require('gulp');
var connect = require('gulp-connect');

var config = {
    port: 1337,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './app/*.html',
        bld: './bld'
    }
};

gulp.task('connect', function(){
    connect.server({
        root: ['bld'],
        port: config.port,
        base: config.devBaseUrl
    })
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.bld))
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['html', 'connect', 'watch']);