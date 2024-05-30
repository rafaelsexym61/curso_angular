import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoviajeComponent } from './../destinoviaje/destinoviaje.component';
import { DestinoViaje } from './../models/destino-viaje.model';



@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [CommonModule, DestinoviajeComponent],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})
export class ListaDestinosComponent {
 public destinos: DestinoViaje[];
	constructor() {
		this.destinos = [];
	}
	ngOnInit() {
}
guardar(nombre:string, url:string):boolean{
	this.destinos.push(new DestinoViaje(nombre, url));
	console.log(this.destinos);
	console.log(this.destinos[1].nombre);
	return false;

}


}


