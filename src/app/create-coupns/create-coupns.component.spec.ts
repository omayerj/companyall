import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoupnsComponent } from './create-coupns.component';

describe('CreateCoupnsComponent', () => {
  let component: CreateCoupnsComponent;
  let fixture: ComponentFixture<CreateCoupnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCoupnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCoupnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
