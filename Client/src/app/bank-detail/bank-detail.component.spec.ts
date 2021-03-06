import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailComponent } from './bank-detail.component';

describe('EmployeeDetailComponent', () => {
  let component: BankDetailComponent;
  let fixture: ComponentFixture<BankDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
