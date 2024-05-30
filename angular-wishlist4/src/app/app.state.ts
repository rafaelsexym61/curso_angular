import { Lugar } from './models/lugar.model';
import { DestinoViaje } from './models/destino-viaje.model';

export interface AppState {
  readonly lugares: Lugar[];
  readonly destinos: DestinoViaje[];

}