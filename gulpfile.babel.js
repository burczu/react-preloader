import gulp from 'gulp';
import path from 'path';
import eslint from 'gulp-eslint';
import run from 'gulp-run';
import webpack from 'webpack';
import gulpUtil from 'gulp-util';

gulp.task('default', ['eslint', 'watch', 'npm_pack']); // no-udef

gulp.task('webpack', done => {
  webpack({
    entry: path.join(__dirname, 'src', 'index.js'), //eslint-disable-line no-undef
    output: {
      path: path.join(__dirname, 'build'), //eslint-disable-line no-undef
      filename: 'index.js'
    },
    externals: ['React', { react: 'React' }],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      ]
    }
  }, error => {
    if (error) {
      let pluginError = new gulpUtil.PluginError('webpack', error);

      if (done) {
        done(pluginError);
      } else {
        gulpUtil.log('[webpack]', pluginError);
      }

      return;
    }

    if (done) {
      done();
    }
  });
});

gulp.task('watch', () => {
  let files = ['**/*.js', '!node_modules/**', '!build/**'];
  gulp.watch(files, ['eslint', 'npm_pack']);
});

gulp.task('eslint', () => {
  return gulp.src(['**/*.js', '!node_modules/**', '!build/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('npm_pack', ['webpack'], () => {
  run('npm pack').exec();
});
