import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiListGroup } from './ui-list-group';

describe('UiListGroup', () => {
  let component: UiListGroup;
  let fixture: ComponentFixture<UiListGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiListGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiListGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
