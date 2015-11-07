var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var tsProject = $.typescript.createProject('tsconfig.json');

gulp.task('ts', function() {
    var tsResult = gulp.src(['app/elements/**/*.ts', 'bower_components/polymer-ts/polymer-ts.d.ts'])
        .pipe($.typescript(tsProject));
    return tsResult.js.pipe(gulp.dest('app/elements'));
});

/*
@component("my-greeting")
class MyGreeting extends polymer.Base {
   @property({notify: true})
   greeting:string = "Welcome!";
}
MyGreeting.register();
*/
