import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCartComponent } from './bank-cart.component';

describe('BankCartComponent', () => {
  let component: BankCartComponent;
  let fixture: ComponentFixture<BankCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
