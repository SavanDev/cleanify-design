import { dest, series, src, watch, task } from 'gulp';
import child from 'child_process';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import cleanifyPackage from './package.json';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

const siteRoot = 'docs';

function CompileCSS() {
    return src('scss/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('site/assets/css', {overwrite: true}))
        .pipe(dest('dist/css', {overwrite: true}));
}

function CompileJS() {
    return browserify({
            baseDir: 'ts',
            entries: ['ts/main.ts']
        })
        .plugin('tsify')
        .bundle()
        .pipe(source('cleanify.js'))
        .pipe(dest('site/assets/js', {overwrite: true}))
        .pipe(dest('dist/js', {overwrite: true}));
}

function GemJekyll() {
    return child.spawn('bundle', ['install']);
}

function Jekyll() {
    return child.spawn('jekyll', ['build']);
}

function ServeDocs() {
    browserSync.init({
        files: [siteRoot + '/**'],
        port: 4000,
        open: false,
        server: {
            baseDir: siteRoot,
            routes: {
                '/cleanify-design': siteRoot
            }
        }
    });

    watch(['scss/**/*.scss', 'ts/**/*.ts', 'site/**', '!site/**/cleanify*', '_config.yml'], series(CompileCSS, CompileJS, Jekyll));
}

function MakeDistZIP() {
    return src(['dist/**', '!dist/**/*.zip'])
        .pipe(zip('dist-v' + cleanifyPackage.version + '.zip'))
        .pipe(dest('dist', {overwrite: true}));
}

task('build', series(CompileCSS, CompileJS, MakeDistZIP));
task('default', series(CompileCSS, CompileJS, GemJekyll, Jekyll, ServeDocs));