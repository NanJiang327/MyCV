var gulp = require('gulp')

var sass = require('gulp-sass')

// 定义任务
gulp.task('sass',function(){
    gulp.src('./scss/*.scss')
        .pipe(sass({
            comments: false,
            css: 'css',
            sass: 'sass',
            image: 'img'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('vendor', function() {
    gulp.src(['./bower_components/pagePiling.js/dist/jquery.pagepiling.min.js',
            './bower_components/pagePiling.js/dist/jquery.pagepiling.css'])
        .pipe(gulp.dest('./vendor'))
})

gulp.task('default', ['sass', 'vendor'] ,function(){
    gulp.watch('./scss/*.scss', ['sass']);
});
