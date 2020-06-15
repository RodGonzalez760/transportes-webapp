import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  lista: Observable<Usuario[]>;

  constructor(private afs: AngularFirestore) {}

  createUsuario(usuario: Usuario) {
    this.afs
      .collection<Usuario>('Usuario')
      .add(JSON.parse(JSON.stringify(usuario)));
  }

  readAllUsuario() {
    return (this.lista = this.afs
      .collection<Usuario>('Usuario')
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
      .doc('Usuario/' + usuario.idUsuario)
      .update(JSON.parse(JSON.stringify(usuario)));
  }

  deleteUsuario(idUsuario: string) {
    this.afs.doc('Usuario/' + idUsuario).delete();
  }
}
