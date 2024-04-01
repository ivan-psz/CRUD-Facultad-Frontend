import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDocenteModalComponent } from './delete-docente-modal.component';

describe('DeleteDocenteModalComponent', () => {
  let component: DeleteDocenteModalComponent;
  let fixture: ComponentFixture<DeleteDocenteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDocenteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteDocenteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
