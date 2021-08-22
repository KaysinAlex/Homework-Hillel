const STICKER_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const template = $('#stickerItemTemplate').html();
const stickerList = $('#listStickers');
const newStickerEl = $('.newStickerTextarea');
const addBtn = $('#btnAdd');
const deleteBtn = $('.delBtn');

let stickers = [];



addBtn.click(onAddStickerClick);
stickerList.click(onDeleteStickerClick).focusout(onEditStickerFocusout);


function onAddStickerClick(event) {
    event.preventDefault();
    submitForm();
}


function onEditStickerFocusout(event) {
    const stickerId = getStickerId(event.target);
    saveSticker(stickerId);
}

function onDeleteStickerClick(event) {
    const stickerId = getStickerId(event.target);
   
    if ($(event.target).hasClass('delBtn')) {
        deleteSticker(stickerId);
    }
   }

function getStickerId(el) {
    return el.closest('.item').dataset.stickerId; 
}


init();

function init() {
    fetchSticker();
}

function fetchSticker() {
    fetch(STICKER_URL)
    .then((resp) => resp.json())
    .then(setStickers)
    .then(renderList)
}

function setStickers(data) {
    return stickers = data;
}

function renderList(list){
    stickerList.html(list.map(getItemHtml).join(''));
}

function getItemHtml({description, id}) {
    return template
    .replace('{{description}}', description)
    .replace('{{id}}', id);
}

function submitForm() {
    const newSticker = getFormData()
    createSticker(newSticker);
}

function getFormData() {
    return { description: ''}
}

function createSticker(newSticker) {
    fetch(STICKER_URL, {
        method: 'POST',
        body: JSON.stringify(newSticker),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(resp => resp.json())
    .then(addSticker)
}

function addSticker(stick) {
    stickers.push(stick);
    renderList(stickers)
}

function deleteSticker(id) {
    fetch(STICKER_URL + id, {
        method: 'DELETE',
    }).then(() => {
        stickers = stickers.filter((item) => (item.id !== id));
        renderList(stickers)});
}


function saveSticker(id) {
    const elem = $(`[data-sticker-id=${id}] .newStickerTextarea`);
    const data = $(elem).val();

    fetch(STICKER_URL + id, {
    method: 'PUT',
    body: JSON.stringify({ description: data }),
    headers: {
        'Content-Type': 'application/json',
    },
    })
    .then(resp => resp.json())
    .then((data) => {
        const sticker = stickers.find(sticker => sticker.id === id);
        sticker.description = data.description;
        renderList(stickers)
    });
}
