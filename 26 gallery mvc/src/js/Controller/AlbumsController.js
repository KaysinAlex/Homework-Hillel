import PhotosView from "../view/PhotosView";
import AlbumsView from "../view/AlbumsView";


export default class AlbumsController {
    constructor($container) {
        console.log('Init Albums Controller');
        this.$container = $container;

        this.albumsView = new AlbumsView({
            onAlbumsSelect: (id) => this.getAlbumPhotos(id)
        });

        this.photosView = new PhotosView({});

    }
    getAlbumPhotos(albumId) {
        console.log(albumId);
    }
    
}