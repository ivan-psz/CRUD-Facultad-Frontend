import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAlumnoComponent } from './post-alumno.component';

describe('PostAlumnoComponent', () => {
  let component: PostAlumnoComponent;
  let fixture: ComponentFixture<PostAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostAlumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
