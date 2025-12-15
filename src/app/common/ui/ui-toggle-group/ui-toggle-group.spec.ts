import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToggleGroup } from './ui-toggle-group';

describe('UiToggleGroup', () => {
  let component: UiToggleGroup;
  let fixture: ComponentFixture<UiToggleGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiToggleGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiToggleGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
