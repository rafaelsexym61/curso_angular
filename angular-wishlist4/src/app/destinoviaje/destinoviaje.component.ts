import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Input, HostBinding } from '@angular/core'; // First, import Input
import { DestinoViaje } from './../models/destino-viaje.model'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; //recien importado
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { DestinosAcciones } from '../store/destinos.actions';
import { Console } from 'console';


@Component({
  selector: 'app-destinoviaje',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destinoviaje.component.html',
  styleUrl: './destinoviaje.component.css'
})
export class DestinoviajeComponent {
	@Input() destino: DestinoViaje;
	@Input('idx') position: number;


	@HostBinding('attr.class') cssClass = 'col-md-4';
	//prueba: String;
	@Output() clicked: EventEmitter<DestinoViaje>;
	constructor(private store: Store<AppState>){
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
	voteUp()
	{
		console.log("intentando votar")
		this.store.dispatch(new DestinosAcciones(this.destino, 2))
		console.log("termino de votar")
		return false;
	}
	voteDown()
	{
		this.store.dispatch(new DestinosAcciones(this.destino, 3))
		return false;
	}
}
