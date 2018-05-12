import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByTypeComponent } from './get-by-type.component';

describe('GetByTypeComponent', () => {
  let component: GetByTypeComponent;
  let fixture: ComponentFixture<GetByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
