import $ from 'jquery';

export default class AlbumsView {
    constructor(config) {
        this.config = config;
        this.$el = this.initView();

        console.log('Init AlbumsView ');       
    }
    
    initView() {
        console.log('Init Albums View');
         return $('<div id = "albums" class = "albums three columns"></div>')
            .on('click', '.album-item', (e) => this.config.onAlbumsSelect($(e.target).data('id')));
    }

    renderList(list) {
        console.log('render list');
        this.$el.html(
            list.map(this.generateAlbumHtml)
            .join('\n')
        )
    }
    generateAlbumHtml({ id, title }) {
        console.log('generate Album Html',title);
        return `<div class="album-item" data-id = "${id}">${title}</div>`;
    }
}