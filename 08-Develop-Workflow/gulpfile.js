var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
// var babel = require("gulp-babel");
var concat = require("gulp-concat");
const babili = require("gulp-babili");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    // this works!  Click on the console.log in the output (chrome dev tools)
    .pipe(babili({
      mangle: {
        keepClassNames: true
      }
    }))
   // .pipe(minify())
    .pipe(concat("bundle.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build"));
});

// https://github.com/babel/gulp-babel might be relvant.

// https://github.com/boopathi/babel-minify points to another project.

