var gulp = require('gulp'),
    bower = require('main-bower-files'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter');


gulp.task('css', function() {
  jsFilter = filter('**/*.css');
  gulp.src(bower())
      .pipe(jsFilter)
      .pipe(concat('lib.css'))
      .pipe(gulp.dest('./stylesheets/'))
});
