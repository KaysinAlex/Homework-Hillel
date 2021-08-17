import $ from 'jquery';
export default class PhotosView {
    constructor() {
        this.$el = this.initView();
        console.log('initPhotosView ');
    }
    initView() {
        console.log('init Photos View');
        return $('<div id = "photos" class = "photos nine columns"><div>')
    }
}