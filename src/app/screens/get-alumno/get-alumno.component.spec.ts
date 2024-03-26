import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAlumnoComponent } from './get-alumno.component';

describe('GetAlumnoComponent', () => {
  let component: GetAlumnoComponent;
  let fixture: ComponentFixture<GetAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
