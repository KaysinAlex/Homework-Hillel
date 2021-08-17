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
    renderList(list) {
        console.log('render Photos List');
        this.$el.html(
            list.map((photo) => this.generatePhotoHtml(photo))
                .join('\n')
        )
    }
    generatePhotoHtml({thumbnailUrl, title}) {
        console.log('generate Photo Html');
        return `<img class="photo-item" src = "${thumbnailUrl}" alt ="${title}"/>`;
    }
}