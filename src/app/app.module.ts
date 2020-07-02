import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './componentes/login/login.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TransporteComponent } from './componentes/transporte/transporte.component';
import { TransporteFormComponent } from './componentes/transporte/transporte-form.component';
import { LineaTransporteComponent } from './componentes/linea-transporte/linea-transporte.component';
import { AgenciaComponent } from './componentes/agencia/agencia.component';
import { ReclamoComponent } from './componentes/reclamo/reclamo.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { AgenciaFormComponent } from './componentes/agencia/agencia-form.component';
import { LineaTransporteFormComponent } from './componentes/linea-transporte/linea-transporte-form.component';
import { PortadaComponent } from './componentes/portada/portada.component';

const config = {
  apiKey: 'AIzaSyDHBIGUSWtcp3xWpQ2ECoC_Q7Qj8NzoWj8',
  authDomain: 'trasportracking.firebaseapp.com',
  databaseURL: 'https://trasportracking.firebaseio.com',
  projectId: 'trasportracking',
  storageBucket: 'trasportracking.appspot.com',
  messagingSenderId: '353201080906',
  appId: '1:353201080906:web:44ce9ceaf7f57994aaf4b3',
  measurementId: 'G-QF5CKHGQM8',
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapaComponent,
    FooterComponent,
    HeaderComponent,
    TransporteComponent,
    TransporteFormComponent,
    LineaTransporteComponent,
    AgenciaComponent,
    ReclamoComponent,
    ReportesComponent,
    AgenciaFormComponent,
    LineaTransporteFormComponent,
    PortadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
