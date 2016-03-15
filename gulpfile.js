var gulp = require('gulp'); 
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

// compile sass
gulp.task('sass', function() {
    return sass('scss/app.scss', { style: 'expanded' })
        .pipe(gulp.dest('css'));
});

// run BrowserSync
gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});


// Default Task
gulp.task('default', ['sass', 'browser-sync', 'watch']);