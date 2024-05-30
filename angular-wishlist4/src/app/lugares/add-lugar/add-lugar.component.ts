// Importaciones
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as LugarActions from './../../store/lugares.actions';
import { Lugar } from '../../models/lugar.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


//@ViewChild("input1", { static: true }) inputacion: ElementRef;

@Component({
  selector: 'app-add-lugar',
  templateUrl: './add-lugar.component.html',
  styleUrl: './add-lugar.component.css',
  imports: [FormsModule],
  standalone: true
})
export class AddLugarComponent implements OnInit {

  myName!: string | undefined;
  example: string;


  setMyName(event: Event): void {
    const value = <string>((event.target as HTMLInputElement).value);
    this.myName = value;
  }

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  // Disparamos la acción
  addTask(name, state) {
    console.log('agregando Lugar');
    this.store.dispatch(new LugarActions.AddLugar({name: name, state}, 0) )

  }
  removeTask(name: string, state){
    if (confirm("are you sure?")){
      //this.store.dispatch(new LugarActions.RemoveLugar({name, state}) )
      //this.store.dispatch(new LugarActions.RemoveLugar({name: name, state}) )
      this.store.dispatch(new LugarActions.AddLugar({name: name, state}, 1) )
    }
    //this.store.del()
  }
}
