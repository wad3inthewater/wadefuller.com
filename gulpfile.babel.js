import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';
import sass from 'gulp-sass';

const paths = {
  js          : ['./public/javascripts/**/*.js'],
  destination : './app',
  sass        : './public/sass/**/*.scss',
  css         : './public/stylesheets'
};

gulp.task('default', callback => {
  run('server', 'build', 'watch', callback);
});

gulp.task('build', callback => {
  run('sass', 'clean', 'flow', 'babel', 'restart', callback);
});

gulp.task('clean', callback => {
  rimraf(paths.destination, callback);
});

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
});

gulp.task('flow', shell.task([
  'flow'
], {ignoreErrors : true}));

gulp.task('babel', shell.task([
  'babel public/javascripts --out-dir app'
]));

let express;

gulp.task('server', () => {
  express = server.new(paths.destination);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});

gulp.task('watch', () => {
  gulp.watch(paths.js, ['build']);
  gulp.watch(paths.sass, ['sass']);
  // return watch(paths.js, () => {
  //   gulp.start('build');
  // });
});