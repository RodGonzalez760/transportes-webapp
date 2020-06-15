import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineaTransporte } from '../modelo/linea-transporte';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LineaTransporteService {
  lista: Observable<LineaTransporte[]>;
  linea: Observable<LineaTransporte>;

  constructor(private afs: AngularFirestore) {}

  readLineaTransportePorId(idLineaTransporte: string) {
    return (this.linea = this.afs
      .doc<LineaTransporte>('LineaTransporte/' + idLineaTransporte)
      .valueChanges());
  }

  createLineaTransporte(linea: LineaTransporte) {
    this.afs
      .collection<LineaTransporte>('LineaTransporte')
      .add(JSON.parse(JSON.stringify(linea)));
  }

  readAllLineaTransporte() {
    return (this.lista = this.afs
      .collection<LineaTransporte>('LineaTransporte')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const idLineaTransporte = a.payload.doc.id;
            return { idLineaTransporte, ...data };
          })
        )
      ));
  }

  updateLineaTransporte(linea: LineaTransporte) {
    this.afs.doc('LineaTransporte/' + linea.idLineaTransporte).update(
      JSON.parse(
        JSON.stringify({
          idAgencia: linea.idAgencia,
          nombreLinea: linea.nombreLinea,
        })
      )
    );
  }

  deleteLineaTransporte(idLineaTransporte: string) {
    this.afs.doc('LineaTransporte/' + idLineaTransporte).delete();
  }
}
