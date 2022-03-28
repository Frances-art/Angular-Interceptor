import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEmployeeListComponent } from './bank-list.component';

describe('EmployeeEmployeeListComponent', () => {
  let component: EmployeeEmployeeListComponent;
  let fixture: ComponentFixture<EmployeeEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEmployeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
