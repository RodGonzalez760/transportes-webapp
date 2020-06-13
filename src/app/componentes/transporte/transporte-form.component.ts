import { Component, OnInit } from '@angular/core';
import { Transporte } from 'src/app/modelo/transporte';
import { LineaTransporte } from 'src/app/modelo/linea-transporte';
import { LineaTransporteService } from 'src/app/servicios/linea-transporte.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransporteService } from 'src/app/servicios/transporte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transporte-form',
  templateUrl: './transporte-form.component.html',
  styleUrls: ['./transporte-form.component.css'],
})
export class TransporteFormComponent implements OnInit {
  transporte: Transporte = new Transporte();
  listaLineaTransportes: LineaTransporte[];

  constructor(
    private servicioLineaTransporte: LineaTransporteService,
    private servicioTransporte: TransporteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarTransporte();
    this.servicioLineaTransporte
      .getLineaTransportes()
      .subscribe((resultado) => {
        this.listaLineaTransportes = resultado;
      });
  }

  actualizarTransporte() {
    this.servicioTransporte.updateTransporte(this.transporte);
    Swal.fire({
      icon: 'success',
      title: 'Actualizado',
      text: 'Trnasporte actualizado',
    });
    this.router.navigate(['/transporte']);
  }

  agregarTransporte() {
    this.servicioTransporte.addTransporte(this.transporte);
    Swal.fire({
      icon: 'success',
      title: 'Agregado',
      text: 'Trnasporte agregado',
    });
    this.router.navigate(['/transporte']);
  }

  cargarTransporte() {
    this.activatedRoute.params.subscribe((resultado) => {
      let idTransporte = resultado['idTransporte'];
      if (idTransporte) {
        this.servicioTransporte
          .getTransportePorId(idTransporte)
          .subscribe((resultado) => {
            this.transporte = resultado;
            if (this.transporte) {
              this.transporte.idTransporte = idTransporte;
            }
          });
      }
    });
  }

  compararLineaTransporte(o1: LineaTransporte, o2: LineaTransporte) {
    return o1 == null || o2 == null ? false : o1 == o2;
  }
}
