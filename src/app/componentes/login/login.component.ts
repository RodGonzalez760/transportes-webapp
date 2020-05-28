import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Cuenta } from 'src/app/modelo/cuenta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Cuenta = new Cuenta();

  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {}

  login() {
    this.auth.signInWithEmailAndPassword(
      this.usuario.correoElectronico,
      this.usuario.password
    );
  }
}
