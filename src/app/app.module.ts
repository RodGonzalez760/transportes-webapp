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

const config = {
  apiKey: 'AIzaSyBSCgdhGkZJrsrS2_4eTqPksggOttaFCvo',
  authDomain: 'transportes-app-d6fcb.firebaseapp.com',
  databaseURL: 'https://transportes-app-d6fcb.firebaseio.com',
  projectId: 'transportes-app-d6fcb',
  storageBucket: 'transportes-app-d6fcb.appspot.com',
  messagingSenderId: '1308881467',
  appId: '1:1308881467:web:30208d15d237ee2446621e',
  measurementId: 'G-X4H3RMC3MS',
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
