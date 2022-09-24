import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon/pokemon';
import { Tipo } from 'src/app/models/Tipo/tipo';
import { CargaPokemonService } from 'src/app/services/carga-pokemon-service';
import { CargaTiposService } from 'src/app/services/carga-tipos-service';

@Component({
  selector: 'lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.css'],
})
export class ListaPokemonComponent implements OnInit {

  listaPokemon: Pokemon[];
  tipos: Tipo[];
  tipoPulsado: String;

  constructor(
    private cargaPokemonService: CargaPokemonService,
    private cargaTiposService: CargaTiposService
  ) {
    this.listaPokemon = [];
    this.tipos = [];
    this.tipoPulsado = '';
  }

  ngOnInit(): void {
    this.cargaPokemonService.getAllPokemon().subscribe((listaPokemon) => {
      this.listaPokemon = listaPokemon;
    });

    this.cargaTiposService.getAllTipos().subscribe((tipos) => {
      this.tipos = tipos;
    });
  }

  setTipoPulsado(tipo: String) {
    this.tipoPulsado = tipo;
  }
  
}
