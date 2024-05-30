import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosApiClient2Component } from './destinos-api-client2.component';

describe('DestinosApiClient2Component', () => {
  let component: DestinosApiClient2Component;
  let fixture: ComponentFixture<DestinosApiClient2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinosApiClient2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinosApiClient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
