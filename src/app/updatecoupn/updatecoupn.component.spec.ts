import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecoupnComponent } from './updatecoupn.component';

describe('UpdatecoupnComponent', () => {
  let component: UpdatecoupnComponent;
  let fixture: ComponentFixture<UpdatecoupnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecoupnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecoupnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
