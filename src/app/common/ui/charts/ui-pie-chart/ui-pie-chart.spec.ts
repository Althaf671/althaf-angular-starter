import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPieChart } from './ui-pie-chart';

describe('UiPieChart', () => {
  let component: UiPieChart;
  let fixture: ComponentFixture<UiPieChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPieChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPieChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
