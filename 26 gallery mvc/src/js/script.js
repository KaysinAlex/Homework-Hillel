import $ from 'jquery';

import AlbumsController from './Controller/AlbumsController';

$(() => {
    new AlbumsController($('.container'));
})