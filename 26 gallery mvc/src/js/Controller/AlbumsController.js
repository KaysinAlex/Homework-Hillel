import PhotosView from "../view/PhotosView";
import AlbumsView from "../view/AlbumsView";
import AlbumsCollection from "../model/AlbumsCollection";
import PhotosCollection from "../model/PhotosCollection";


export default class AlbumsController {
    constructor($container) {
        console.log('Init Albums Controller');
        this.$container = $container;

        this.albumsView = new AlbumsView({
            onAlbumsSelect: (id) => this.getAlbumPhotos(id)
        });

        this.photosView = new PhotosView({});

        this.$container
            .append(this.albumsView.$el)
            .append(this.photosView.$el);
        
        this.albumsCollection = new AlbumsCollection();
        this.photosCollection = new PhotosCollection();

        this.init();
    }

    init() {
        this.albumsCollection.getList()
            .then(() => {
                this.albumsView.renderList(this.albumsCollection.list);
                this.getAlbumPhotos(this.albumsCollection.list[0].id);
            })
            .catch((e) => {
                console.log(e);
            });    
    }
    
    getAlbumPhotos(albumId) {
        this.photosCollection.getPhotos(albumId).then(() => {
            this.photosView.renderList(this.photosCollection.list);
            
            console.log('albumId', albumId);
        });
    }
    
}