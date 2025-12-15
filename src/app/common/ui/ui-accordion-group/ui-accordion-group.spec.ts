import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAccordionGroup } from './ui-accordion-group';

describe('UiAccordionGroup', () => {
  let component: UiAccordionGroup;
  let fixture: ComponentFixture<UiAccordionGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAccordionGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAccordionGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
