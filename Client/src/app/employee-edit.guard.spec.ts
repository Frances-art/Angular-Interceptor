import { TestBed } from '@angular/core/testing';

import { EmployeeEmployeeEditGuard } from './employee-edit.guard';

describe('EmployeeEmployeeEditGuard', () => {
  let guard: EmployeeEmployeeEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeEmployeeEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
