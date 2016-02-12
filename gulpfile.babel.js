import gulp from 'gulp';
import rename from 'gulp-rename';
import path from 'path';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import eslint from 'gulp-eslint';

gulp.task('default', [ 'eslint', 'watch' ], () => {
  return gulp.src(path.join('src', 'index.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('react-preloader.js'))
    .pipe(gulp.dest('standalone'));
});

gulp.task('watch', () => {
  gulp.watch('src/*.js', [ 'eslint' ]);
});

gulp.task('eslint', () => {
  return gulp.src(['src/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});