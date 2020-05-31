import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agencia } from '../modelo/agencia';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AgenciaService {
  listaAgencias: Observable<Agencia[]>;

  constructor(private afs: AngularFirestore) {}

  addAgencia(agencia: Agencia) {
    this.afs
      .collection<Agencia>('agencias')
      .add(JSON.parse(JSON.stringify(agencia)));
  }

  getAgencias() {
    return (this.listaAgencias = this.afs
      .collection<Agencia>('agencias')
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
      .doc('agencias/' + agencia.idAgencia)
      .update(JSON.parse(JSON.stringify(agencia)));
  }

  deleteAgencia(idAgencia: string) {
    this.afs.doc('agencias/' + idAgencia).delete();
  }
}
