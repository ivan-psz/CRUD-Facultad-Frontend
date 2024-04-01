import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlumnoModalComponent } from './delete-alumno-modal.component';

describe('DeleteAlumnoModalComponent', () => {
  let component: DeleteAlumnoModalComponent;
  let fixture: ComponentFixture<DeleteAlumnoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAlumnoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAlumnoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
