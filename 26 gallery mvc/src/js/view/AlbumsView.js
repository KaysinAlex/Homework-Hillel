import $ from 'jquery';

export default class AlbumsView {
    constructor(config) {
        this.config = config;
        this.$el = this.initView();

        console.log('Init Albums View');
    }
}