import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { RouterModule } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaDestinosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-wishlist2';
  /*time = new Observable <string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });*/
}
