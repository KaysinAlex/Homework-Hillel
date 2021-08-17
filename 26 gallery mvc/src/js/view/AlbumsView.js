import $ from 'jquery';

export default class AlbumsView {
    constructor(config) {
        this.config = config;
        this.$el = this.initView();

       
    }
    initView() {
        console.log('Init Albums View');
         return $('<div id = "albums" class = "albums three columns"></div>')
            .on('click', '.album-item', (e) => this.config.onAlbumsSelect($(e.target).data('id')));
    }
}