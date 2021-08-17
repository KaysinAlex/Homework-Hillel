import AlbumsView from "./view/AlbumsView";


export default class AlbumsController {
    constructor($container) {
        console.log('Init Albums Controller');
        this.$container = $container;
        this.albumsView = new AlbumsView()

    }
    
}