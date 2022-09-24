import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './components/menu/menu.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { ItemPokemonComponent } from './components/item-pokemon/item-pokemon.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FormularioAddPokemonComponent } from './components/formulario-add-pokemon/formulario-add-pokemon.component';
import { ImageMissingDirective } from './directives/image-missing/image-missing.directive';
import { MainHeaderComponent } from './components/headers/main-header/main-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaPokemonComponent,
    ItemPokemonComponent,
    FormularioAddPokemonComponent,
    ImageMissingDirective,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
