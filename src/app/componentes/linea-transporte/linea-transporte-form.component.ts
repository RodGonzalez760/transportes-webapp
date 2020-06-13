import { Component, OnInit } from '@angular/core';
import { LineaTransporteService } from 'src/app/servicios/linea-transporte.service';
import { AgenciaService } from 'src/app/servicios/agencia.service';
import { LineaTransporte } from 'src/app/modelo/linea-transporte';
import { Agencia } from 'src/app/modelo/agencia';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linea-transporte-form',
  templateUrl: './linea-transporte-form.component.html',
  styleUrls: ['./linea-transporte-form.component.css'],
})
export class LineaTransporteFormComponent implements OnInit {
  lineaTransporte: LineaTransporte = new LineaTransporte();
  listaAgencias: Agencia[];

  constructor(
    private servicioLineaTransporte: LineaTransporteService,
    private servicioAgencia: AgenciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarLineaTransporte();
    this.servicioAgencia.getAgencias().subscribe((resultado) => {
      this.listaAgencias = resultado;
    });
  }

  actualizarLineaTransporte() {
    this.servicioLineaTransporte.updateLineaTransportes(this.lineaTransporte);
    Swal.fire({
      icon: 'success',
      title: 'Actualizado',
      text: 'Linea de Transporte actualizado',
    });
    this.router.navigate(['/lineatransporte']);
  }

  agregarLineaTransporte() {
    this.servicioLineaTransporte.addLineaTransporte(this.lineaTransporte);
    Swal.fire({
      icon: 'success',
      title: 'Agregado',
      text: 'Linea Transporte agregado',
    });
    this.router.navigate(['/lineatransporte']);
  }

  cargarLineaTransporte() {
    this.activatedRoute.params.subscribe((resultado) => {
      let idLineaTransporte = resultado['idLineaTransporte'];
      if (idLineaTransporte) {
        this.servicioLineaTransporte
          .getLineaTransportePorId(idLineaTransporte)
          .subscribe((resultado) => {
            this.lineaTransporte = resultado;
            if (this.lineaTransporte) {
              this.lineaTransporte.idLineaTransporte = idLineaTransporte;
            }
          });
      }
    });
  }

  compararAgencia(o1: Agencia, o2: Agencia) {
    return o1 == null || o2 == null ? false : o1 == o2;
  }
}
