'use script'
log = console.log;

const photos = document.querySelector('#photos');
const pagination = document.querySelector('#pagination');

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=200';

let listPhoto = [];

pagination.addEventListener('click', onPagesClick);

function onPagesClick(e) {
    log('clicked');
    if (e.target.classList.contains('page')) {
        getAlbumPhotos(e.target.id);
        saveToLocalStorage(e.target.id);
    }
}

init();

function init() {
    getPhotos()
        .then(getFirstAlbumPhotos)
        .then(restoreFromLocalStorage);
    log('init');
}
function getPhotos() {
    log('getPhotos');
    return fetch(PHOTO_URL)
        .then((resp) => resp.json())
        .then((data) => (listPhoto = data))
        .then((data) => {
            getPagination(data);
            return data;
        });
}

function getPagination(listPhoto) {
    let page = listPhoto.length / 50;
    for (let numpage = 1; numpage <= page; numpage++){
        createPagination(numpage);
        log('createPages');
    }
    log('listPhoto');
}

function createPagination(numpage) {
    let num = document.createElement('b');
    num.className = 'page';
    num.innerHTML = numpage;
    num.id = numpage;
    pagination.appendChild(num);
    log('createPagination', pagination);
}
function renderPhotos(list) {
    photos.innerHTML = '';
    list.forEach((item) => renderPhoto(item));
    log('render');
}
function renderPhoto(photo) {
    const png = document.createElement('li');
    const image = document.createElement('img');
    image.alt = photo.title;
    image.src = photo.thumbnailUrl;
    png.appendChild(image);
    photos.appendChild(png);
    log('photo');
}

function getFirstAlbumPhotos(data) {
    if (data.length) {
        getAlbumPhotos(data[0].id);
    }
    log('getFirstAlbumPhotos');
}

function getAlbumPhotos(number) {
    log('getAlbumPhotos');
    let newListPhoto = listPhoto.filter((item) => item.albumId === +number);
    renderPhotos(newListPhoto);
}
 
function saveToLocalStorage(pageId) {
    localStorage.setItem('pageId', JSON.stringify(pageId));
}

function restoreFromLocalStorage() {
    const data = localStorage.getItem('pageId');
    if (data !== null) {
        getAlbumPhotos(JSON.parse(data));
    }
}