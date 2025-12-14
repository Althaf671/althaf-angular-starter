import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTree } from './ui-tree';

describe('UiTree', () => {
  let component: UiTree;
  let fixture: ComponentFixture<UiTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
