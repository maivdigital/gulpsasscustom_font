const path          = require('path');
const gulp          = require('gulp');
const concat        = require('gulp-concat');
const sass          = require('gulp-sass')(require('sass'));
const autoprefixer  = require('gulp-autoprefixer');
const sourcemaps    = require('gulp-sourcemaps');
const addsrc        = require('gulp-add-src');
const rename        = require('gulp-rename');
const cleanCSS      = require('gulp-clean-css'); /* minify css */
const browserSync   = require('browser-sync').create();

const theme = 'public';
const projectUrl = "http://127.0.0.1:5500/index.html";
const dir = {
    build: './src/',
    template: path.join(__dirname, theme +'/')
};
console.log(dir.template);

// Browser Sync task
function browserSyncTask(){
  let files = [
    'index.html',
    'index.js'
  ];
  // Initialize BrowserSync
  browserSync.init(files,{
    proxy: projectUrl
  });
}

// Created a separate file .browserslistrc  to store autoprefixerOptions
// let autoprefixerOptions = { browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] };

function sassCompile(){
  return gulp.src(dir.build + 'sass/**/*.scss')
  .pipe(sourcemaps.init( {loadMaps: false} ))
  .pipe(sass().on('error', sass.logError))
  // .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(rename('sass.css'))
  .pipe(sourcemaps.write())
  // .pipe(sourcemaps.init( {loadMaps: false} ))
  // .pipe(autoprefixer())
  .pipe(concat('style.css'))
  .pipe(gulp.dest(dir.template +'.'))
  .pipe(browserSync.stream())
}


/* 
Minify CSS - Gulp-Clean-CSS 
https://www.npmjs.com/package/gulp-clean-css
*/
function compressCSS(){
  return gulp.src( dir.template+'style.css' )
  .pipe(cleanCSS({compatibilty: 'ie8'}))
  .pipe(rename( 'style.min.css' ))
  .pipe(gulp.dest(dir.template+'.'))
  .pipe(addsrc( dir.build+'css/theme-header.css' ))
  .pipe(concat( 'style.min.css' ))
  .pipe(gulp.dest(dir.template+'.'));
}


function gulpWatch(){
  gulp.watch(dir.build + 'sass/**/*.scss', sassCompile);
}

// New Gulp 4.0 
gulp.task('default', gulp.parallel(gulpWatch, browserSyncTask)); 

gulp.task('compress', gulp.series(compressCSS));


