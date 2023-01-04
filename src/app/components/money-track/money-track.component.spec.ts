import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTrackComponent } from './money-track.component';

describe('MoneyTrackComponent', () => {
  let component: MoneyTrackComponent;
  let fixture: ComponentFixture<MoneyTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
