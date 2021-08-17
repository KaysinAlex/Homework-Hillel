import { PHOTOS_URL } from "../config";

import BaseCollection from "./BaseCollection";
export default class PhotosCollection extends BaseCollection {
    getPhotos(albumId) {
        this._url = PHOTOS_URL + albumId;
        console.log('getPhotos Collection');

        return super.getList();
    }
}