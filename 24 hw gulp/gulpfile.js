const {parallel} = require('gulp');


function hello(cb) {
    console.log('Hello world');
    cb();
}
function copyJs(cb) {
    setTimeout(() => {
        console.log('copy js');
        cb();
    }, 2000);
}
function copyCss(cb) {
    setTimeout(() => {
        console.log('copy Css');
        cb();
    }, 1000);
}

module.exports = {
    hello,
    build: parallel(copyJs, copyCss),
};