// Import Gulp task automation configuration.
import gulp from 'gulp';
import webp from 'gulp-webp';

// Import Webpack task manager configuration.
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';

// [GulpTask-1] HTML: Copy all files (src => dist).
gulp.task('html', function() 
{
    console.log("[GulpTask-1] HTML: Copy all files (src => dist).");

    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

// [GulpTask-2] CSS: Copy all files (src/css => dist/css).
gulp.task('css', function() {
    console.log("[GulpTask-2] CSS: Copy all files (src/css => dist/css).");

    return gulp.src('src/css/*.css')
        .pipe(gulp.dest('dist/css/'));
});

// [GulpTask-3] WebpJpgConvert: Copy all files (src/img => dist/img).
gulp.task('webpJpg', function () {
    console.log("[GulpTask-3] WebpJpgConvert: Copy all files (src/img => dist/img).");

    return gulp.src('src/img/*.jpg')
        .pipe(webp({ quality: 98 }))
        .pipe(gulp.dest('dist/img/'));
});

// [GulpTask-4] WebpPngConvert: Copy all files (src/img => dist/img).
gulp.task('webpPng', function () {
    console.log("[GulpTask-4] WebpPngConvert: Copy all files (src/img => dist/img).");

    return gulp.src('src/img/*.png')
        .pipe(webp({ quality: 98 }))
        .pipe(gulp.dest('dist/img/'));
});

// [GulpTask-5] SVG: Copy all files (src/img => dist/img).
gulp.task('svg', function () {
    console.log("[GulpTask-5] SVG: Copy all files (src/img => dist/img).");

    return gulp.src('src/img/*.svg')
        .pipe(gulp.dest('dist/img/'));
});

// [GulpTask-6] JSBundle: Running JS bundle files using Webpack config.
gulp.task('js', function() {
    console.log(
        "[GulpTask-6] JSBundle: Running JS bundle files using Webpack config:",
        webpackConfig
    );

    return gulp.src('src/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js/'))
});

// [GulpTask-7] Watch: Watcher for file changes in src directory.
gulp.task('watch', function() {
    console.log("[GulpTask-7] Watch: Watcher for file changes in src directory.");

    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/css/*.css', gulp.series('css'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/img/*.jpg', gulp.series('webpJpg'));
    gulp.watch('src/img/*.png', gulp.series('webpPng'));
    gulp.watch('src/img/*.svg', gulp.series('svg'));
});

// [GulpTask-8] Default: Running default tasks.
gulp.task('default', gulp.parallel('html', 'css', 'js', 'watch'));
