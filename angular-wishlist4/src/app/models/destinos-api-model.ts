import { DestinoViaje } from "./destino-viaje.model"

export class destinosApiClient {
    public destinos: DestinoViaje [];
    add(d: DestinoViaje){
        this.destinos.push(d);
    }

}