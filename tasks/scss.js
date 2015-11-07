var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scss', function() {
  return gulp.src(['app/**/*.scss'])
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'));
});
