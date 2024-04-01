import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDocenteScreenComponent } from './p-docente-screen.component';

describe('PDocenteScreenComponent', () => {
  let component: PDocenteScreenComponent;
  let fixture: ComponentFixture<PDocenteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PDocenteScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PDocenteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
