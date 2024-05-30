import { Action, createAction, props } from '@ngrx/store'
import { DestinoViaje } from '../models/destino-viaje.model';

export const ADD_DEST = 'Add destino';
export const REMOVE_DEST='Remove destino';
export const VOTE_UP='votar a favor';
export const VOTE_DOWN='votar en contra';


export class DestinosAcciones implements Action {
  
    readonly type 
    constructor(public destino: DestinoViaje, tipo: number) {
      if (tipo==0){
         this.type = ADD_DEST;
      }
      if (tipo==1){
        this.type = REMOVE_DEST;
     }
     if (tipo==2){
        this.type = VOTE_UP;
     }
     if (tipo==3){
       this.type = VOTE_DOWN;
    }
    }
    
  }

  export type Actions = DestinosAcciones;
