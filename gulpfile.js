var gulp = require('gulp');
var gulpPostcss = require('gulp-postcss');

// Let's compile the CSS
gulp.task('css', function() {
  return gulp.src('css/src/styles.css')
    .pipe(gulpPostcss([
        require('postcss-simple-vars'),
        require('./postcss-not-important'),
        require('autoprefixer-core')({ browsers: ['last 2 versions', '> 2%'] })
    ]))
    .pipe(gulp.dest('css/dist'));
});