import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEmployeeComponent } from './pay-employee.component';

describe('PayEmployeeComponent', () => {
  let component: PayEmployeeComponent;
  let fixture: ComponentFixture<PayEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
