import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UifooterComponent } from './footer.component';

describe('UifooterComponent', () => {
  let component: UifooterComponent;
  let fixture: ComponentFixture<UifooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UifooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
