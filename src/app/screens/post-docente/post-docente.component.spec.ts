import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDocenteComponent } from './post-docente.component';

describe('PostDocenteComponent', () => {
  let component: PostDocenteComponent;
  let fixture: ComponentFixture<PostDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
