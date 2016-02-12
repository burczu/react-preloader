import gulp from 'gulp';
import rename from 'gulp-rename';
import path from 'path';

gulp.task('default', () => {
  gulp.src(path.join('src', 'index.js')).pipe(rename('react-preloader.js')).pipe(gulp.dest('standalone'));
});