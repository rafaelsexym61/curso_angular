// 1 - Importaciones
import { Action, createAction, props } from '@ngrx/store'
import { Lugar } from './../models/lugar.model'
import { DestinoViaje } from '../models/destino-viaje.model';

// 2 - Definición del tipo de acción
export const ADD_TASK = 'Add Lugar';
export const REMOVE_TASK='Remove Lugar';
export const VOTE_UP='Remove Lugar';
export const VOTE_DOWN='Remove Lugar';

// 3 - Creación de la clase tipo AddTask
export class AddLugar implements Action {
  
  readonly type 
  constructor(public payload: Lugar, tipo: number) {
    if (tipo==0){
       this.type = ADD_TASK;
    }
    if (tipo==1){
      this.type = REMOVE_TASK;
   }
  }
  
}

export class RemoveLugar implements Action {
    readonly type = REMOVE_TASK
    constructor(public payload: Lugar) { }
  }

/*export const  RemoveLugar = createAction (
    '[Cart] Remove Lugar from Store',
    props<{lugar: Lugar}>()
);*/
    


// 4 - Exportación de la acción
export type Actions = AddLugar;
//export type Actions2 = RemoveLugar;

// product.action.ts
//import { createAction, props } from "@ngrx/store";
//import { Lugar } from "../models/lugar.model";


export const agregarLugar = createAction(
    'agregar lugar',
    props<{ products: Lugar }>()
);

export const removerLugar = createAction(
    'remover lugar',
    props<{ product: Lugar }>()
);

