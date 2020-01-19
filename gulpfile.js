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
        .pipe(dest('./dist/js'))
        .pipe(dest('./public/js'));
}

function compileCSS() {
    return src('./scss/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist/css'))
        .pipe(dest('./public/css'));
}

function cleanDist() {
    return src('./dist/*')
        .pipe(clean());
}

function cleanDocs() {
    return src(['./public/css/*', './public/js/*'])
        .pipe(clean());
}

function watchDist() {
    watch([
        './scss/**/*.scss',
        './js/**/*.js',
        './icons/**/*.svg'
    ], series(cleanDist, cleanDocs, compileCSS, compileJS, updateLogo));
}

function updateLogo() {
    return src('./icons/cd-current.svg')
        .pipe(dest('./src/img/'));
}

exports.watch = watchDist;
exports.default = series(cleanDist, cleanDocs, compileCSS, compileJS);