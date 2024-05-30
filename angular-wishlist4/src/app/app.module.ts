import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoviajeComponent } from './destinoviaje/destinoviaje.component';

import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';

import {RouterModule,Routes} from '@angular/router';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormControl, Validators} from '@angular/forms';
import { DestinosApiClientComponent } from './destinos-api-client/destinos-api-client.component';
import { DestinosApiClient2Component } from './destinos-api-client2/destinos-api-client2.component';
import { StoreModule } from '@ngrx/store';
import { lugarReducer } from './store/lugares.reducer';
//import { reducers } from './store/lugares.reducer';
import { AddLugarComponent } from './lugares/add-lugar/add-lugar.component';
import { ListalugaresComponent } from './lugares/listalugares/listalugares.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { destinoReducer } from './store/destinos.reducer';




const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: ListaDestinosComponent},
{ path: 'home', component: DestinoDetalleComponent}
];
@NgModule({
  declarations: [
   

    
    
  
    DestinoDetalleComponent,
                      DestinosApiClientComponent,
                      DestinosApiClient2Component
                      
  ],
  imports: [ 
  AppComponent,
    BrowserModule,
    AppRoutingModule,
    ListaDestinosComponent,
        DestinoviajeComponent,
        
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FormDestinoViajeComponent,
        AddLugarComponent,
                      ListalugaresComponent,
        //StoreModule.forRoot({lugares: lugarReducer}),
        StoreModule.forRoot({lugares: lugarReducer, destinos: destinoReducer}),
        StoreDevtoolsModule.instrument(),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
  //bootstrap: []
})
export class AppModule { }
