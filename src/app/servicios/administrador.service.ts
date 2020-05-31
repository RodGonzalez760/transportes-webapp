import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../modelo/administrador';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  listaAdministradores: Observable<Administrador[]>;

  constructor(private afs: AngularFirestore) {}

  addAdministrador(administrador: Administrador) {
    this.afs
      .collection<Administrador>('administradores')
      .add(JSON.parse(JSON.stringify(administrador)));
  }

  getAdministradores() {
    return (this.listaAdministradores = this.afs
      .collection<Administrador>('administradores')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const idAdministrador = a.payload.doc.id;
            return { idAdministrador, ...data };
          })
        )
      ));
  }

  updateAdminsitrador(administrador: Administrador) {
    this.afs
      .doc('administradores/' + administrador.idAdministrador)
      .update(JSON.parse(JSON.stringify(administrador)));
  }

  deleteAdministrador(idAdministrador: string) {
    this.afs.doc('administradores/' + idAdministrador).delete();
  }
}
