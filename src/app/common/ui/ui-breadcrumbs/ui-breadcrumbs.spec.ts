import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBreadcrumbs } from './ui-breadcrumbs';

describe('UiBreadcrumbs', () => 
{
  let component: UiBreadcrumbs;
  let fixture: ComponentFixture<UiBreadcrumbs>;

  beforeEach(async () => 
  {
    await TestBed.configureTestingModule({
      imports: [UiBreadcrumbs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiBreadcrumbs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => 
  {
    expect(component).toBeTruthy();
  });
});
