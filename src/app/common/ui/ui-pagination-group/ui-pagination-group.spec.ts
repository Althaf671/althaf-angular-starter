import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPaginationGroup } from './ui-pagination-group';

describe('UiPaginationGroup', () => {
  let component: UiPaginationGroup;
  let fixture: ComponentFixture<UiPaginationGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPaginationGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPaginationGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
