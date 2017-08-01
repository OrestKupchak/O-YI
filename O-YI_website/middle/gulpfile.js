var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib')
var jeet = require('jeet')
var rupture = require('rupture')

gulp.task('compress', function () {
  return gulp.src('./main.styl')
    .pipe(stylus({
      compress: true,
      use: [
        nib(),
        jeet(),
        rupture()
      ]
    }))
    .pipe(gulp.dest('./'));
});