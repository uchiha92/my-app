import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAddPokemonComponent } from './formulario-add-pokemon.component';

describe('FormularioAddPokemonComponent', () => {
  let component: FormularioAddPokemonComponent;
  let fixture: ComponentFixture<FormularioAddPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAddPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
