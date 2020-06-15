import { Component, OnInit } from '@angular/core';
import { Agencia } from 'src/app/modelo/agencia';
import { LineaTransporte } from 'src/app/modelo/linea-transporte';
import { AgenciaService } from 'src/app/servicios/agencia.service';
import { LineaTransporteService } from 'src/app/servicios/linea-transporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-linea-transporte',
  templateUrl: './linea-transporte.component.html',
  styleUrls: ['./linea-transporte.component.css'],
})
export class LineaTransporteComponent implements OnInit {
  listaAgencias: Agencia[];
  listaLineaTransportes: LineaTransporte[];

  constructor(
    private servicioLineaTransorte: LineaTransporteService,
    private servicioAgencia: AgenciaService
  ) {}

  ngOnInit(): void {
    this.servicioLineaTransorte
      .readAllLineaTransporte()
      .subscribe((resultado) => {
        this.listaLineaTransportes = resultado;
        console.log(this.listaLineaTransportes);
      });
    this.servicioAgencia.readAllAgencia().subscribe((resultado) => {
      this.listaAgencias = resultado;
    });
  }

  eliminarLineaTransporte(lineatransporte: LineaTransporte) {
    Swal.fire({
      title: 'Estas seguro?',
      text: `Seguro que quieres eliminar la linea transporte ${lineatransporte.nombreLinea}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result) => {
      if (result.value) {
        this.servicioLineaTransorte.deleteLineaTransporte(
          lineatransporte.idLineaTransporte
        );
        Swal.fire(
          'Eliminado',
          'La linea transporte ha sido eliminado.',
          'success'
        );
      }
    });
  }
}
