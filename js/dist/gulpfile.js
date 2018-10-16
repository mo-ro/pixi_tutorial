var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
gulp.task('css',function(){
    gulp.src(['./**/*.css'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('css/dist'))
        .pipe(reload())
});
gulp.task('js',function(){
    gulp.src(['./**/*.js'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('js/dist'))
        .pipe(reload())
});
gulp.task('html',function(){
    gulp.src(['html/**/*.html'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest('./'))
        .pipe(reload())
});
gulp.task('default',function(){
    browserSync.init({
        server: "./"
    });
    gulp.watch('./**/*.js',['js']);
    gulp.watch('./**/*.css',['css']);
    gulp.watch('*.html',['html']);
    gulp.watch('images/src/**/*',['image']);
});
