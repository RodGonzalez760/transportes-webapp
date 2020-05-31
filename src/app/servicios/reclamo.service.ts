import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from '../modelo/reclamo';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReclamoService {
  listaReclamos: Observable<Reclamo[]>;

  constructor(private afs: AngularFirestore) {}

  addReclamo(reclamo: Reclamo) {
    this.afs
      .collection<Reclamo>('reclamos')
      .add(JSON.parse(JSON.stringify(reclamo)));
  }

  getReclamos() {
    return (this.listaReclamos = this.afs
      .collection<Reclamo>('reclamos')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const idReclamo = a.payload.doc.id;
            return { idReclamo, ...data };
          })
        )
      ));
  }

  updateReclamo(reclamo: Reclamo) {
    this.afs
      .doc('reclamos/' + reclamo.idReclamo)
      .update(JSON.parse(JSON.stringify(reclamo)));
  }

  deleteReclamo(idReclamo: string) {
    this.afs.doc('reclamos/' + idReclamo).delete();
  }
}
