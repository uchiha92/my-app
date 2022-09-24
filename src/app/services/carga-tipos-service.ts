import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITipo } from '../interfaces/ITipo/ITipo';

@Injectable({
  providedIn: 'root',
})
export class CargaTiposService {
  constructor(private firestore: Firestore) {}

  async getTipo(tipoId: String) {
    const pokemonDocRef = doc(this.firestore, `Tipos/${tipoId}`);
    const docSnap = await getDoc(pokemonDocRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log(`${tipoId}: No such tipo document!`);
      return false;
    }
  }

  getAllTipos(): Observable<ITipo[]> {
    const pokemonRef = collection(this.firestore, 'Tipos');
    return collectionData(pokemonRef, { idField: 'id' }) as Observable<ITipo[]>;
  }
  
}