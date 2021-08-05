const { parallel, src, dest } = require('gulp');
const concat = require('gulp-concat');

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

module.exports = {
    build: parallel(copyHttml, copyJs, copyCss),
};



