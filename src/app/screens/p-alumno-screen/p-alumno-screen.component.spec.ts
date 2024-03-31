import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAlumnoScreenComponent } from './p-alumno-screen.component';

describe('PAlumnoScreenComponent', () => {
  let component: PAlumnoScreenComponent;
  let fixture: ComponentFixture<PAlumnoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PAlumnoScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PAlumnoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
