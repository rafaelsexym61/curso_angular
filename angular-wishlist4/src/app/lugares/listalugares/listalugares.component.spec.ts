import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalugaresComponent } from './listalugares.component';

describe('ListalugaresComponent', () => {
  let component: ListalugaresComponent;
  let fixture: ComponentFixture<ListalugaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListalugaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListalugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
