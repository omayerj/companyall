import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByEndDateComponent } from './get-by-end-date.component';

describe('GetByEndDateComponent', () => {
  let component: GetByEndDateComponent;
  let fixture: ComponentFixture<GetByEndDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByEndDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByEndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
