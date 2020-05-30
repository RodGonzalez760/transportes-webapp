import { Component, OnInit } from '@angular/core';
import { AgenciaService } from 'src/app/servicios/agencia.service';
import { Observable } from 'rxjs';
import { Agencia } from 'src/app/modelo/agencia';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
