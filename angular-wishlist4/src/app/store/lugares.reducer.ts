// 1 - Importaciones
import { ListaDestinosComponent } from '../lista-destinos/lista-destinos.component';
import { DestinoViaje } from '../models/destino-viaje.model';
import { Lugar } from '../models/lugar.model'
import * as LugarActions from './lugares.actions'

//@Input() destino: DestinoViaje;

// 2 - Estado inicial
const initialState: Lugar = {
  name: 'prueba',
  state: 'Pending'
}
 

// 3 - Switch con las funciones puras
export function lugarReducer(state: Lugar[] = [initialState], action: LugarActions.Actions) {
  //@Input() destino: DestinoViaje;
  switch (action.type) {
    case LugarActions.ADD_TASK:
      return [...state, action.payload];
    case LugarActions.REMOVE_TASK:
      const products = [...state];
    const index = products.findIndex(x => x.name === action.payload.name);
    products.splice(index, 1);
    console.log('los productos son:');
    console.log(products);
    /*state = {
      ...products.splice(index, 1)
    }*/
      return products;
  
    default:
      return state;
  }
}



/*
import { createReducer, on } from '@ngrx/store';
import { ListalugaresComponent } from '../lugares/listalugares/listalugares.component';
//import * as PostsActions from './product.actions';

export const initialState: ICart = {
  products: [],
  error: null,
};*/
/*
export const reducers = createReducer(
  initialState,
  on(LugarActions.agregarLugar, (state) => ({
    ...state,
  })),
  
  on(LugarActions.removerLugar, (state, action) => {
    const products = [...state.lugares];
    const index = products.findIndex(x => x.id === action.product.id);
    products.splice(index, 1);
    
    state = {
      ...state,
      products: products
    }

    return state;
  })
);*/