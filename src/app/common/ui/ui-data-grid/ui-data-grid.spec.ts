import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDataGrid } from './ui-data-grid';

describe('UiDataGrid', () => {
  let component: UiDataGrid;
  let fixture: ComponentFixture<UiDataGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDataGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDataGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
