import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDestinoDeViajeComponent } from './tarjeta-destino-de-viaje.component';

describe('TarjetaDestinoDeViajeComponent', () => {
  let component: TarjetaDestinoDeViajeComponent;
  let fixture: ComponentFixture<TarjetaDestinoDeViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaDestinoDeViajeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarjetaDestinoDeViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
