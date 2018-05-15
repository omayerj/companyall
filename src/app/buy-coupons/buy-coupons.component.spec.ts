import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCouponsComponent } from './buy-coupons.component';

describe('BuyCouponsComponent', () => {
  let component: BuyCouponsComponent;
  let fixture: ComponentFixture<BuyCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
