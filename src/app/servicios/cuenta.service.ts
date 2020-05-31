import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Cuenta } from '../modelo/cuenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CuentaService {
  listaCuentas: Observable<Cuenta[]>;

  constructor(private afs: AngularFirestore) {}

  getCuentas() {
    return (this.listaCuentas = this.afs
      .collection<Cuenta>('cuentas')
      .valueChanges());
  }
}
