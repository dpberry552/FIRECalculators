import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireCalcFormComponent } from './fire-calc-form.component';

describe('FireCalcFormComponent', () => {
  let component: FireCalcFormComponent;
  let fixture: ComponentFixture<FireCalcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireCalcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireCalcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
