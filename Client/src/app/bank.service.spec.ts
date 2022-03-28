import { TestBed } from '@angular/core/testing';

import { BankService } from './bank.service';

describe('EmployeeEmployeeService', () => {
  let service: BankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
