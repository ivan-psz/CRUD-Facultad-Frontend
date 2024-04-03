import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMateriasScreenComponent } from './list-materias-screen.component';

describe('ListMateriasScreenComponent', () => {
  let component: ListMateriasScreenComponent;
  let fixture: ComponentFixture<ListMateriasScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMateriasScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMateriasScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
