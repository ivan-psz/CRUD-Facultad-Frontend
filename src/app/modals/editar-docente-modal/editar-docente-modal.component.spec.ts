import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDocenteModalComponent } from './editar-docente-modal.component';

describe('EditarDocenteModalComponent', () => {
  let component: EditarDocenteModalComponent;
  let fixture: ComponentFixture<EditarDocenteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarDocenteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarDocenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
