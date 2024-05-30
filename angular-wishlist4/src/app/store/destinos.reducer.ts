import { DestinoViaje } from '../models/destino-viaje.model';
import * as DestinosAcciones from './destinos.actions'

export function destinoReducer(state: DestinoViaje[]=[], action: DestinosAcciones.Actions) {
    //@Input() destino: DestinoViaje;
    switch (action.type) {
      case DestinosAcciones.ADD_DEST:
        return [...state, action.destino];
      case DestinosAcciones.REMOVE_DEST:
        const products = [...state];
      const index = products.findIndex(x => x.nombre === action.destino.nombre);
      products.splice(index, 1);
      console.log('los destinos son:');
      console.log(products);
      /*state = {
        ...products.splice(index, 1)
      }*/
        return products;
      case DestinosAcciones.VOTE_UP:
        var destinos=[...state];
        console.log(action.destino)
        var d: DestinoViaje = new DestinoViaje(action.destino.nombre,action.destino.u,action.destino.votes+1)
        var ind: number =destinos.findIndex(x => x.nombre === action.destino.nombre);
        destinos[ind]=d;
        //console.log(d)
                //d.voteUp();
        return destinos;
        case DestinosAcciones.VOTE_DOWN:
        var destinos=[...state];
        console.log(action.destino)
        var d: DestinoViaje = new DestinoViaje(action.destino.nombre,action.destino.u,action.destino.votes-1)
        ind =destinos.findIndex(x => x.nombre === action.destino.nombre);
        destinos[ind]=d;
        //console.log(d)
                //d.voteUp();
        return destinos;
      default:
        return state;
    }
  }