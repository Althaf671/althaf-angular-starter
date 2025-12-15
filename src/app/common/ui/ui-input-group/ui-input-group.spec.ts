import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputGroup } from './ui-input-group';

describe('UiInputGroup', () => {
  let component: UiInputGroup;
  let fixture: ComponentFixture<UiInputGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
