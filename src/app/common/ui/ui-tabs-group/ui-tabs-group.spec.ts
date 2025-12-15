import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabsGroup } from './ui-tabs-group';

describe('UiTabsGroup', () => {
  let component: UiTabsGroup;
  let fixture: ComponentFixture<UiTabsGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTabsGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTabsGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
