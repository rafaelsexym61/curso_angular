import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Lugar } from './../../models/lugar.model';
import { AppState } from './../../app.state';
import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listalugares',
  templateUrl: './listalugares.component.html',
  styleUrl: './listalugares.component.css',
  imports:[CommonModule],
  standalone: true
})
export class ListalugaresComponent implements OnInit {

    
  // Definimos el observable:
  lugares: Observable<Lugar[]>;
  nombres: string[];
  constructor(
    private store: Store<AppState>
  ) { 
    // Accedemos a la store:
    

    this.lugares = this.store.select("lugares");
    console.log("ayuda");
    //this.lugares.forEach(function (l){
    //  this.nombres.push("algo");
   // })
    console.log("ayuda");
    //console.log(this.nombres);
  }

  ngOnInit() {
    this.lugares.subscribe((alguno)=>{
      console.log(alguno);
      
    } );
  }
  getName(lugar: Lugar){
    return lugar.name;
  }
 
  

  removerLugar(){

  }  
}
