const { parallel, src, dest } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssNano = require('gulp-cssnano');

function copyJs(cb) {
    return src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(dest('./dist/js'));
}
function copyCss(cb) {
    return src('./src/css/**/*.css')
        .pipe(dest('./dist/css'));
}
/* function copyJqueryCss() {
    return src('./src/jquery/jquery-1.8.3.js')
        .pipe(dest('./dist/js/jquery'));
} */
function copyHttml() {
    return src('./src/index.html')
        .pipe(dest('./dist'));
}

function copyMiniUglifyJs() {
    return src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify('app.js'))
        .pipe(dest('./dist/js'));
}
function copyMiniCssNano() {
    return src('./src/css/**/*.css')
        .pipe(concat('styles.css'))
        .pipe(cssNano())
        .pipe(dest('./dist/css'));
}


module.exports = {
    build: parallel(copyHttml, copyJs, copyCss),
    uglify: parallel(copyMiniUglifyJs, copyMiniCssNano, copyHttml)
};



