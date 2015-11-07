var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

module.exports = {
  assets: $.useref.assets(),
  // Note: this uses an unsigned certificate which on first access
  //       will present a certificate warning in the browser.
  https: false,
  watch: function() {
    gulp.watch(['app/**/*.html'], ['babel', reload]);
    gulp.watch(['app/**/*.scss'], ['scss', reload]);
    gulp.watch(['app/{scripts,elements}/**/{*.js,*.html}'], ['jshint', 'babel', reload]);
    gulp.watch(['app/images/**/*'], reload);
  }
};

// Build production files, the default task
gulp.task('default', ['clean'], function (cb) {
  // Uncomment 'cache-config' if you are going to use service workers.
  runSequence(
    ['copy'],
    ['lint', 'images', 'fonts'],
    ['babel', 'scss'],
    // 'cache-config',
    cb);
});
