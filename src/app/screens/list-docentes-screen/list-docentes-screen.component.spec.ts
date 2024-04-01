import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocentesScreenComponent } from './list-docentes-screen.component';

describe('ListDocentesScreenComponent', () => {
  let component: ListDocentesScreenComponent;
  let fixture: ComponentFixture<ListDocentesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDocentesScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDocentesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
