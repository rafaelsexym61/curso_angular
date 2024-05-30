import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoviajeComponent } from './../destinoviaje/destinoviaje.component';
import { DestinoViaje } from './../models/destino-viaje.model';
import { RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';
//import { destinosApiClient } from '../models/destinos-api-model';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from '../form-destino-viaje/form-destino-viaje.component';
import { DestinosApiClient } from '../models/destinos-api-client.model';
import { ListalugaresComponent } from '../lugares/listalugares/listalugares.component';
import { AddLugarComponent } from '../lugares/add-lugar/add-lugar.component';
import { DestinosAcciones } from '../store/destinos.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { state } from '@angular/animations';



@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [CommonModule, DestinoviajeComponent, RouterModule, FormDestinoViajeComponent, ListalugaresComponent,AddLugarComponent],
  providers:[DestinosApiClient],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})
export class ListaDestinosComponent  implements OnInit{

@Output() onItemAdded:EventEmitter<DestinoViaje>; onItemRemoved:EventEmitter<DestinoViaje>;
	
 //public destinos: DestinoViaje[];
 destinos: Observable<DestinoViaje[]>;
 updates: string[];
//public	destinosApiClient: DestinosApiClient;

	constructor(private destinosApiClient: DestinosApiClient, private store: Store<AppState>) {
		this.onItemAdded = new EventEmitter;
		this.onItemRemoved = new EventEmitter;
		this.updates = [];
		this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
			if (d != null){
				this.updates.push('se ha elegido a '+ d.nombre)
			}
		});
		//this.onItemAdded = new EventEmitter();
		//this.destinos=[]; 
		this.destinos=this.store.select("destinos");
	}
	ngOnInit() {
}

agregado(d: DestinoViaje){
	/*
	this.destinos.push(d);
	this.destinosApiClient.add(d);
	this.onItemAdded.emit(d);*/
	
		console.log('agregando Lugar');
		this.store.dispatch(new DestinosAcciones(d, 0) )
	
	
}
removido(d: DestinoViaje){
	/*
	this.destinos.push(d);
	this.destinosApiClient.add(d);
	this.onItemAdded.emit(d);*/
	
		console.log('agregando Lugar');
		this.store.dispatch(new DestinosAcciones(d, 1) )
	
	
}
elegido(e:DestinoViaje) {
	this.destinosApiClient.elegir(e); 
	// esto era lo que estaba antes
	//this.destinos.forEach(function (x) {x.setSelected(false);});
	e.setSelected(true);
}


}


