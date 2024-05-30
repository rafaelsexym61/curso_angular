import { Component } from '@angular/core';
import { Input, HostBinding } from '@angular/core'; // First, import Input
import { Bicicleta } from './../models/bicicleta.model';

@Component({
  selector: 'app-bicicleta',
  standalone: true,
  imports: [],
  templateUrl: './bicicleta.component.html',
  styleUrl: './bicicleta.component.css'
})
export class BicicletaComponent {
	@Input() cleta: Bicicleta;
	@HostBinding('attr.class') cssClass = 'col-md-4';
	//prueba: String;
	
	constructor(){
	//console.log(this.cleta);
		//this.prueba=destino.nombre;
		//this.destino=new DestinoViaje(nombre, url);

	}
	
	ngOnInit() {
	}
}
