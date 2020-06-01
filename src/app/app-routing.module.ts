import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { TransporteComponent } from './componentes/transporte/transporte.component';
import { TransporteFormComponent } from './componentes/transporte/transporte-form.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgenciaComponent } from './componentes/agencia/agencia.component';
import { AgenciaFormComponent } from './componentes/agencia/agencia-form.component';
import { LineaTransporteComponent } from './componentes/linea-transporte/linea-transporte.component';
import { LineaTransporteFormComponent } from './componentes/linea-transporte/linea-transporte-form.component';
import { ReclamoComponent } from './componentes/reclamo/reclamo.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'reclamo', component: ReclamoComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'transporte', component: TransporteComponent },
  { path: 'transporte/form', component: TransporteFormComponent },
  { path: 'transporte/form/:idTransporte', component: TransporteFormComponent },
  { path: 'agencia', component: AgenciaComponent },
  { path: 'agencia/form', component: AgenciaFormComponent },
  { path: 'transporte/form/:idAgencia', component: AgenciaFormComponent },
  { path: 'lineatransporte', component: LineaTransporteComponent },
  { path: 'lineatransporte/form', component: LineaTransporteFormComponent },
  {
    path: 'lineatransporte/form/:idLineaTransporte',
    component: LineaTransporteFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
