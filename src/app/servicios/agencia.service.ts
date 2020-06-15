import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agencia } from '../modelo/agencia';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AgenciaService {
  lista: Observable<Agencia[]>;

  constructor(private afs: AngularFirestore) {}

  createAgencia(agencia: Agencia) {
    this.afs
      .collection<Agencia>('Agencia')
      .add(JSON.parse(JSON.stringify(agencia)));
  }

  readAllAgencia() {
    return (this.lista = this.afs
      .collection<Agencia>('Agencia')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const idAgencia = a.payload.doc.id;
            return { idAgencia, ...data };
          })
        )
      ));
  }

  updateAgencia(agencia: Agencia) {
    this.afs
      .doc('Agencia/' + agencia.idAgencia)
      .update(JSON.parse(JSON.stringify(agencia)));
  }

  deleteAgencia(idAgencia: string) {
    this.afs.doc('Agencia/' + idAgencia).delete();
  }
}
