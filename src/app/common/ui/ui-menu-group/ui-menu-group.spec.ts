import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMenuGroup } from './ui-menu-group';

describe('UiMenuGroup', () => {
  let component: UiMenuGroup;
  let fixture: ComponentFixture<UiMenuGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiMenuGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiMenuGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
