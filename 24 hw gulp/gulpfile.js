const {parallel, src, dest } = require('gulp');



function copyJs() {
   return src('./src/js/**/*.js').pipe(dest('./dist/js'));
}
function copyCss() {
   return src('./src/css/**/*.css').pipe(dest('./dist/css'));
}
function copyHttml() {
   return src('./src/index.html').pipe(dest('./dist'));
}

module.exports = {
    build: parallel(copyHttml, copyJs, copyCss),
};