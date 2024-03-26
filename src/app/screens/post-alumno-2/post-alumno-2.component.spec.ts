import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlumno2Component } from './post-alumno-2.component';

describe('PostAlumno2Component', () => {
  let component: PostAlumno2Component;
  let fixture: ComponentFixture<PostAlumno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostAlumno2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostAlumno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
