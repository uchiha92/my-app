import { Component, OnInit, Input, Directive } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Pokemon } from 'src/app/models/Pokemon/pokemon';
import { CargaImagenesService } from 'src/app/services/carga-imagenes-service';
@Component({
  selector: 'item-pokemon',
  templateUrl: './item-pokemon.component.html',
  styleUrls: ['./item-pokemon.component.css'],
})
export class ItemPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(
    private cargaImagenesService: CargaImagenesService,
    private storage: Storage
  ) {
    this.pokemon = new Pokemon();
  }

  ngOnInit(): void {
    this.setImagenPokemon();
  }

  async setImagenPokemon() {
    const imagesRef = ref(this.storage, `img/pokemon/`);
    const url = await getDownloadURL(
      ref(imagesRef, `${this.pokemon.imagen.toLocaleLowerCase()}`)
    )
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
        if (url) {
          this.pokemon.imagen = url;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
