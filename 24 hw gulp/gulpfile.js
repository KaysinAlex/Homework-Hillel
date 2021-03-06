const { parallel, src, dest } = require('gulp');
const concat = require('gulp-concat'); // Объединение файлов - конкатенация
const uglify = require('gulp-uglify'); //Минимизация javascript
const cssNano = require('gulp-cssnano'); // Минимизация CSS

function copyJs() {
    return src('./src/js/**/*.js')
        .pipe(concat('app.js')) //можно связать несколько задач вместе с помощью метода pipe() 
        .pipe(dest('./dist/js'));
}
function copyCss() {
    return src('./src/css/**/*.css')
        .pipe(dest('./dist/css'));
}

function copyHttml() {
    return src('./src/index.html')
        .pipe(dest('./dist'));
}

function copyMiniUglifyJs() {
    return src('./src/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'));
}
function copyMiniCssNano() {
    return src('./src/css/**/*.css')
        .pipe(cssNano())
        .pipe(dest('./dist/css'));
}


module.exports = {
    minify: parallel(copyMiniUglifyJs, copyMiniCssNano, copyHttml),
    build: parallel(copyCss, copyHttml, copyJs)
};



