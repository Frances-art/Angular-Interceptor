import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEmployeeEditComponent } from './bank-edit.component';

describe('EmployeeEmployeeEditComponent', () => {
  let component: EmployeeEmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEmployeeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEmployeeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
