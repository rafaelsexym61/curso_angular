import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Input, HostBinding } from '@angular/core'; // First, import Input
import { DestinoViaje } from './../models/destino-viaje.model'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-destinoviaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinoviaje.component.html',
  styleUrl: './destinoviaje.component.css'
})
export class DestinoviajeComponent {
	@Input() destino: DestinoViaje;
	@Input('idx') position: number;


	@HostBinding('attr.class') cssClass = 'col-md-4';
	//prueba: String;
	@Output() clicked: EventEmitter<DestinoViaje>;
	constructor(){
		this.clicked = new EventEmitter();
		
	console.log(this.destino);
		//this.prueba=destino.nombre;
		//this.destino=new DestinoViaje(nombre, url);

	}
	
	ngOnInit() {
	}
	
	ir(){
		this.clicked.emit(this.destino);
		return false;
	}
}
