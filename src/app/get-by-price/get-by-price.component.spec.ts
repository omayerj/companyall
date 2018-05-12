import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByPriceComponent } from './get-by-price.component';

describe('GetByPriceComponent', () => {
  let component: GetByPriceComponent;
  let fixture: ComponentFixture<GetByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
