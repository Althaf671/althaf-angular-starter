import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFormContainer } from './ui-form-container';

describe('UiFormContainer', () => {
  let component: UiFormContainer;
  let fixture: ComponentFixture<UiFormContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFormContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
