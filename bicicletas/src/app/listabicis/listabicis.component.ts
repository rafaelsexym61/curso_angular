import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicicletaComponent } from './../bicicleta/bicicleta.component';
import { Bicicleta } from './../models/bicicleta.model';



@Component({
  selector: 'app-listabicis',
  standalone: true,
  imports: [CommonModule, BicicletaComponent],
  templateUrl: './listabicis.component.html',
  styleUrl: './listabicis.component.css'
})
export class ListabicisComponent {
 public bicis: Bicicleta[];
	constructor() {
		this.bicis = [];
	}
	ngOnInit() {
}
guardar(marca:string, color:string):boolean{
	this.bicis.push(new Bicicleta(marca, color));
	console.log(this.bicis);
	console.log(this.bicis[1].marca);
	return false;

}


}


