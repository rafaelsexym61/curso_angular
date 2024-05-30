import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosApiClientComponent } from './destinos-api-client.component';

describe('DestinosApiClientComponent', () => {
  let component: DestinosApiClientComponent;
  let fixture: ComponentFixture<DestinosApiClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinosApiClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinosApiClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
