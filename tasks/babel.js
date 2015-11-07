var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('babel', function () {
  return gulp.src(['app/**/*.{js,html}'])
    .pipe($.sourcemaps.init())
    .pipe($.if('*.html', $.crisper())) // Extract JS from .html files
    .pipe($.if('*.js', $.babel()))
    .pipe($.sourcemaps.write('.')) // {sourceMappingURL: function(file) {return '/' + file.relative + '.map';}}
    .pipe(gulp.dest('dist/'));
});
