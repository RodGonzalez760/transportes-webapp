import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordenada } from '../modelo/coordenada';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CoordenadaService {
  listaCoordenadas: Observable<Coordenada[]>;

  constructor(private db: AngularFireDatabase) {}

  getCoordenadas() {
    return (this.listaCoordenadas = this.db
      .list<Coordenada>('coordenadas')
      .valueChanges());
  }
}
