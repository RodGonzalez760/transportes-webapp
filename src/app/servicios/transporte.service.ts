import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Transporte } from '../modelo/transporte';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransporteService {
  listaTransportes: Observable<Transporte[]>;
  transporte: Observable<Transporte>;

  constructor(private afs: AngularFirestore) {}

  getTransportePorId(idTransporte: string) {
    return (this.transporte = this.afs
      .doc<Transporte>('transportes/' + idTransporte)
      .valueChanges());
  }

  addTransporte(transporte: Transporte) {
    this.afs
      .collection<Transporte>('transportes')
      .add(JSON.parse(JSON.stringify(transporte)))
      .then((resultado) => {
        return resultado;
      });
  }

  getTransportes() {
    return (this.listaTransportes = this.afs
      .collection<Transporte>('transportes')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const idTransporte = a.payload.doc.id;
            return { idTransporte, ...data };
          })
        )
      ));
  }

  updateTransporte(transporte: Transporte) {
    this.afs
      .doc('transportes/' + transporte.idTransporte)
      .update(JSON.parse(JSON.stringify(transporte)));
  }

  deleteTransporte(idTransporte: string) {
    this.afs.doc('transportes/' + idTransporte).delete();
  }
}
