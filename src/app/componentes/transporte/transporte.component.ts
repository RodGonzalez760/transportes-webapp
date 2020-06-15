import { Component, OnInit } from '@angular/core';
import { Transporte } from 'src/app/modelo/transporte';
import { TransporteService } from 'src/app/servicios/transporte.service';
import { LineaTransporte } from 'src/app/modelo/linea-transporte';
import { LineaTransporteService } from 'src/app/servicios/linea-transporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html',
  styleUrls: ['./transporte.component.css'],
})
export class TransporteComponent implements OnInit {
  listaTransportes: Transporte[];
  listaLineaTransportes: LineaTransporte[];

  constructor(
    private servicioTransporte: TransporteService,
    private servicioLineaTransorte: LineaTransporteService
  ) {}

  ngOnInit(): void {
    this.servicioLineaTransorte
      .readAllLineaTransporte()
      .subscribe((resultado) => {
        this.listaLineaTransportes = resultado;
      });
    this.servicioTransporte.readAllTransporte().subscribe((resultado) => {
      this.listaTransportes = resultado;
    });
  }

  eliminarTransporte(transporte: Transporte) {
    Swal.fire({
      title: 'Estas seguro?',
      text: `Seguro que quieres eliminar el transporte ${transporte.idTransporte}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.value) {
        this.servicioTransporte.deleteTransporte(transporte.idTransporte);
        Swal.fire('Eliminado', 'El transporte ha sido eliminado.', 'success');
      }
    });
  }
}
