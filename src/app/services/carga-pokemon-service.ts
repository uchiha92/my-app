import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPokemon } from '../interfaces/IPokemon/IPokemon';

@Injectable({
  providedIn: 'root',
})
export class CargaPokemonService {
  constructor(private firestore: Firestore) {}

  async getPokemon(nombre: string) {
    const pokemonDocRef = doc(this.firestore, `Pokemon/${nombre}`);
    const docSnap = await getDoc(pokemonDocRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log(`${nombre}: No such pokemon document!`);
      return false;
    }
  }

  getAllPokemon(): Observable<IPokemon[]> {
    const pokemonRef = collection(this.firestore, 'Pokemon');
    return collectionData(pokemonRef, { idField: 'id' }) as Observable<
      IPokemon[]
    >;
  }

  addPokemon(pokemon: IPokemon) {
    const pokemonRef = collection(this.firestore, 'Pokemon');
    return addDoc(pokemonRef, pokemon);
  }
  
}
