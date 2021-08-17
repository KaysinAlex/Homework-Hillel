import '../css/normalize.css';
import '../css/skeleton.css';
import '../css/dark-theme.css';
import '../css/style.css';

import $ from 'jquery';

import AlbumsController from './Controller/AlbumsController';

$(() => {
    new AlbumsController($('.container'));
})