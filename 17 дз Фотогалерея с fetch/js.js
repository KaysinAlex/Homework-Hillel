'use script'
log = console.log;

const listPhotos = document.getElementById('images');
let photos = [];

function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
        .then((resp) => {
            resp.json()
                .then((data) => photos = data)
                .then(renderPhotos);
        });
}

function renderPhotos() {
    photos.forEach((item)=> renderPhoto(item))
}

function renderPhoto(photo) {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.src = photo.thumbnailUrl;
    li.appendChild(img);
    listPhotos.appendChild(li);
}
getPhotos();