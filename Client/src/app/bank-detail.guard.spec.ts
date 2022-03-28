import { TestBed } from '@angular/core/testing';

import { BankDetailGuard } from './bank-detail.guard';

describe('EmployeeEmployeeDetailGuard', () => {
  let guard: BankDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BankDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
