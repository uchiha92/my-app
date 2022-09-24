import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
} from '@angular/fire/storage';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CargaImagenesService {
  
  images: string[];
  image: string;

  constructor(private storage: Storage) {
    this.images = [];
    this.image = '';
  }

  uploadImage($event: any, ruta: String) {
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `img/${ruta}`);

    uploadBytes(imgRef, file)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getImages(ruta: String): string[] {
    const imagesRef = ref(this.storage, `img/${ruta}`);

    listAll(imagesRef)
      .then(async (response) => {
        console.log(response);
        this.images = [];

        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('this.images' + this.images);
    return this.images;
  }

  getImage(ruta: String): String {
    const imagesRef = ref(this.storage, `img/`);
    const url = getDownloadURL(ref(imagesRef, `${ruta}`))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();

        this.image = url;
        console.log(url);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(this.image);
    return this.image;
  }
}
