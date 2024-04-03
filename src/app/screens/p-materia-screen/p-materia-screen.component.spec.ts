import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMateriaScreenComponent } from './p-materia-screen.component';

describe('PMateriaScreenComponent', () => {
  let component: PMateriaScreenComponent;
  let fixture: ComponentFixture<PMateriaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PMateriaScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PMateriaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
