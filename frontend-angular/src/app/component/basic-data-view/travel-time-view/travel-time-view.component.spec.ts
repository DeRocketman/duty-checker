import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTimeViewComponent } from './travel-time-view.component';

describe('TravelTimeViewComponent', () => {
  let component: TravelTimeViewComponent;
  let fixture: ComponentFixture<TravelTimeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelTimeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelTimeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
