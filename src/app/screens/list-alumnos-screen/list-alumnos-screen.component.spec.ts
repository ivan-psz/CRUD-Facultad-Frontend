import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlumnosScreenComponent } from './list-alumnos-screen.component';

describe('ListAlumnosScreenComponent', () => {
  let component: ListAlumnosScreenComponent;
  let fixture: ComponentFixture<ListAlumnosScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAlumnosScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAlumnosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
