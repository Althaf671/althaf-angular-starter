import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grand } from './grand';

describe('Grand', () => {
  let component: Grand;
  let fixture: ComponentFixture<Grand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grand]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grand);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
