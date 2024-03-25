import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesScreenComponent } from './docentes-screen.component';

describe('DocentesScreenComponent', () => {
  let component: DocentesScreenComponent;
  let fixture: ComponentFixture<DocentesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocentesScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocentesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
