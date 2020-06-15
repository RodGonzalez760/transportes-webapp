import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Transporte } from '../modelo/transporte';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransporteService {
  lista: Observable<Transporte[]>;
  transporte: Observable<Transporte>;

  constructor(private afs: AngularFirestore) {}

  readTransportePorId(idTransporte: string) {
    return (this.transporte = this.afs
      .doc<Transporte>('Transporte/' + idTransporte)
      .valueChanges());
  }

  createTransporte(transporte: Transporte) {
    this.afs
      .collection<Transporte>('Transporte')
      .add(JSON.parse(JSON.stringify(transporte)));
  }

  readAllTransporte() {
    return (this.lista = this.afs
      .collection<Transporte>('Transporte')
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
    this.afs.doc('Transporte/' + transporte.idTransporte).update(
      JSON.parse(
        JSON.stringify({
          estado: transporte.estado,
          lineaTransporte: transporte.lineaTransporte,
          nombreConductor: transporte.nombreConductor,
          patente: transporte.patente,
        })
      )
    );
  }

  deleteTransporte(idTransporte: string) {
    this.afs.doc('Transporte/' + idTransporte).delete();
  }
}
