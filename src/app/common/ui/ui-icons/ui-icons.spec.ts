import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIcons } from './ui-icons';

describe('UiIcons', () => 
{
  let component: UiIcons;
  let fixture: ComponentFixture<UiIcons>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule({
      imports: [UiIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});
