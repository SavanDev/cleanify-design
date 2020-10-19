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
        .pipe(dest('./site/dist/js'));
}

function compileCSS() {
    return src('./scss/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./site/dist/css'))
}

function cleanDist() {
    return src(['./site/dist/*'])
        .pipe(clean());
}

function watchDist() {
    console.log("Watching files...");
    return watch([
        './scss/**/*.scss',
        './js/**/*.js',
        './icons/**/*.svg'
    ], series(cleanDist, compileCSS, compileJS, updateLogo));
}

function updateLogo() {
    return src('./icons/cd-current.svg')
        .pipe(dest('./site/assets/img/'));
}

exports.watch = watchDist;
exports.default = series(cleanDist, compileCSS, compileJS);