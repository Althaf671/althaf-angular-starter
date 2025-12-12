import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBarChart } from './ui-bar-chart';

describe('UiBarChart', () => {
  let component: UiBarChart;
  let fixture: ComponentFixture<UiBarChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBarChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBarChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
