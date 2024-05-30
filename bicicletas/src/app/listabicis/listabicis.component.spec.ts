import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabicisComponent } from './listabicis.component';

describe('ListabicisComponent', () => {
  let component: ListabicisComponent;
  let fixture: ComponentFixture<ListabicisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListabicisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListabicisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
