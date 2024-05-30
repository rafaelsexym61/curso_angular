import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.css'
})
export class ListaDestinosComponent {
	destinos: string[];
	constructor() {
		this.destinos = ['Barranquilla','Lima','Buenos Aires','Barcelona'];
	}
	ngOnInit() {
}

}
