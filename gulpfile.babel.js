import gulp from 'gulp';
import rename from 'gulp-rename';
import path from 'path';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

gulp.task('default', () => {
  return gulp.src(path.join('src', 'index.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('react-preloader.js'))
    .pipe(gulp.dest('standalone'));
});