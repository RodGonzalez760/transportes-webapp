import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineaTransporte } from '../modelo/linea-transporte';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LineaTransporteService {
  listaLineaTransportes: Observable<LineaTransporte[]>;
  lineaTransporte: Observable<LineaTransporte>;

  constructor(private afs: AngularFirestore) {}

  getLineaTransportePorId(idLineaTransporte: string) {
    return (this.lineaTransporte = this.afs
      .doc<LineaTransporte>('lineatransportes/' + idLineaTransporte)
      .valueChanges());
  }

  addLineaTransporte(lineaTransporte: LineaTransporte) {
    this.afs
      .collection<LineaTransporte>('lineatransportes')
      .add(JSON.parse(JSON.stringify(lineaTransporte)));
  }

  getLineaTransportes() {
    return (this.listaLineaTransportes = this.afs
      .collection<LineaTransporte>('lineatransportes')
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

  updateLineaTransportes(lineaTransporte: LineaTransporte) {
    this.afs
      .doc('lineatransportes/' + lineaTransporte.idLineaTransporte)
      .update(
        JSON.parse(
          JSON.stringify({
            idAgencia: lineaTransporte.idAgencia,
            nombreLinea: lineaTransporte.nombreLinea,
          })
        )
      );
  }

  deleteLineaTransporte(idLineaTransporte: string) {
    this.afs.doc('lineatransportes/' + idLineaTransporte).delete();
  }
}
