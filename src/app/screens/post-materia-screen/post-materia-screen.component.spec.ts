import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMateriaScreenComponent } from './post-materia-screen.component';

describe('PostMateriaScreenComponent', () => {
  let component: PostMateriaScreenComponent;
  let fixture: ComponentFixture<PostMateriaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostMateriaScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostMateriaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
