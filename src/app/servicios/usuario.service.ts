import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  listaUsuarios: Observable<Usuario[]>;

  constructor(private afs: AngularFirestore) {}

  addUsuario(usuario: Usuario) {
    this.afs
      .collection<Usuario>('usuarios')
      .add(JSON.parse(JSON.stringify(usuario)));
  }

  getUsuarios() {
    return (this.listaUsuarios = this.afs
      .collection<Usuario>('usuarios')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const idUsuario = a.payload.doc.id;
            return { idUsuario, ...data };
          })
        )
      ));
  }

  updateUsuario(usuario: Usuario) {
    this.afs
      .doc('usuarios/' + usuario.idUsuario)
      .update(JSON.parse(JSON.stringify(usuario)));
  }

  deleteUsuario(idUsuario: string) {
    this.afs.doc('usuarios/' + idUsuario).delete();
  }
}
