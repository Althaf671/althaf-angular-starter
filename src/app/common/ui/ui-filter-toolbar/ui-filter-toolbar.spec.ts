import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFilterToolbar } from './ui-filter-toolbar';

describe('UiFilterToolbar', () => {
  let component: UiFilterToolbar;
  let fixture: ComponentFixture<UiFilterToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiFilterToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFilterToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
