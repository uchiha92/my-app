import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CargaPokemonService } from 'src/app/services/carga-pokemon-service';
import { CargaImagenesService } from 'src/app/services/carga-imagenes-service';

@Component({
  selector: 'formulario-add-pokemon',
  templateUrl: './formulario-add-pokemon.component.html',
  styleUrls: ['./formulario-add-pokemon.component.css']
})
export class FormularioAddPokemonComponent implements OnInit {

  formulario: FormGroup;

  constructor(private cargaPokemonService: CargaPokemonService,
      cargaImagenesService: CargaImagenesService) {
      this.formulario = new FormGroup({
        nombre: new FormControl(),
        descripcion: new FormControl(),
        ataques: new FormControl(),
        tipo: new FormControl(),
        imagen: new FormControl(),
        id: new FormControl(),
      });
   }

  ngOnInit(): void {
  }

  async onSubmit(){
    console.log(this.formulario.value);
    const response = await this.cargaPokemonService.addPokemon(this.formulario.value);
    console.log(response);
  }

}
