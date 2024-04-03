import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMateriaModalComponent } from './editar-materia-modal.component';

describe('EditarMateriaModalComponent', () => {
  let component: EditarMateriaModalComponent;
  let fixture: ComponentFixture<EditarMateriaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarMateriaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMateriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
