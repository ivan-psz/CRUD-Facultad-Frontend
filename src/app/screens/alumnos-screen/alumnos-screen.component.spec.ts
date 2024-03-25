import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosScreenComponent } from './alumnos-screen.component';

describe('AlumnosScreenComponent', () => {
  let component: AlumnosScreenComponent;
  let fixture: ComponentFixture<AlumnosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
