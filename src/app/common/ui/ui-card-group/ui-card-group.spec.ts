import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardGroup } from './ui-card-group';

describe('UiCardGroup', () => {
  let component: UiCardGroup;
  let fixture: ComponentFixture<UiCardGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCardGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCardGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
