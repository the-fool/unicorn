var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
require('babel-preset-env');


gulp.task('sass', function() {
  var plugins = [
    autoprefixer({
      browsers: ['last 5 versions']
    }),
    cssnano()
  ];
  return gulp.src('./static/*.scss')
    .pipe(sass({
      includePaths: [
        './node_modules/bootstrap/scss'
      ]
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./static/dist/'));
});

gulp.task('js', function() {
  gulp.src(['./static/*.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./static/dist/'));
});


gulp.task('watch', function() {
  gulp.watch(['./static/*.scss', './static/bootswatch/*.scss', './static/*.js'], ['build']);
});

gulp.task('minhtml', function() {
  gulp.src(['./public/**/*.html'])
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('./public'))
});

gulp.task('build', ['sass', 'js']);
