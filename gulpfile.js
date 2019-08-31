const { src, dest, series, watch } = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const clean = require('gulp-clean');

function compileJS() {
    return src('./js/main.js')
        .pipe(webpack({
            mode: 'production',
            output : {
                filename: 'cleanify.js'
            }
        }))
        .pipe(dest('./dist'))
        .pipe(dest('./public/cleanify'));
}

function compileCSS() {
    return src('./scss/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist'))
        .pipe(dest('./public/cleanify'));
}

function cleanDist() {
    return src('./dist/*')
        .pipe(clean());
}

function cleanDocs() {
    return src('./public/cleanify/*')
        .pipe(clean());
}

function watchDist() {
    watch([
        './scss/**/*.scss',
        './js/**/*.js'
    ], series(cleanDist, cleanDocs, compileCSS, compileJS));
}

exports.watch = watchDist;
exports.default = series(cleanDist, cleanDocs, compileCSS, compileJS);