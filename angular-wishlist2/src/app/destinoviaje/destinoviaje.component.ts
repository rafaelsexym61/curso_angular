import { Component } from '@angular/core';
import { Input, HostBinding } from '@angular/core'; // First, import Input
import { DestinoViaje } from './../models/destino-viaje.model'
@Component({
  selector: 'app-destinoviaje',
  standalone: true,
  imports: [],
  templateUrl: './destinoviaje.component.html',
  styleUrl: './destinoviaje.component.css'
})
export class DestinoviajeComponent {
	@Input() destino: DestinoViaje;
	@HostBinding('attr.class') cssClass = 'col-md-4';
	//prueba: String;
	
	constructor(){
	console.log(this.destino);
		//this.prueba=destino.nombre;
		//this.destino=new DestinoViaje(nombre, url);

	}
	
	ngOnInit() {
	}
}
