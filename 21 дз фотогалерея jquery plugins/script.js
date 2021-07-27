log = console.log

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

const $photoGalleryElement = $('#photo-gallery');
const photoTemplate = $('#photoTemplate').html();

let photos = [];
init();
function init() {
    log('init');
    fetchPhotos();
}

function fetchPhotos() {
    fetch(PHOTO_URL)
        .then((resp) => {
            resp
                .json()
                .then(setPhotos)
                .then(renderPhotos)
        });
}
function setPhotos(data) {
    log('setPhotos',photos);
    return (photos = data)
}

function renderPhotos(photos) {
    photos.forEach(item => renderPhoto (item));
    log('renderPhotos',photos);
}

function renderPhoto(photo) {
    const $photoElem = $(getPhotosHtml(photo));

    $photoGalleryElement.append($photoElem)
    log('renderPhoto',photo);
}

function getPhotosHtml(photo) {
    log('getPhoto', photo);
    return photoTemplate
        .replace('{{id}}', photo.id)
        .replace('{{title}}', photo.title)
        .replace('{{url}}', photo.url)
        .replace('{{thumbnailUrl', photo.thumbnailUrl)
}