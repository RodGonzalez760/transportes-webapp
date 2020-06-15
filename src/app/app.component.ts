import { Component } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'transportes-app';
  usuario: User;

  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.auth.user.subscribe((resultado) => {
      this.usuario = resultado;
    });
  }
}
