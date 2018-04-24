import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCoupnsComponent } from './sort-coupns.component';

describe('SortCoupnsComponent', () => {
  let component: SortCoupnsComponent;
  let fixture: ComponentFixture<SortCoupnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortCoupnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCoupnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
