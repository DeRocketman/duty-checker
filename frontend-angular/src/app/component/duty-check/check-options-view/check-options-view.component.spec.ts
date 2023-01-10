import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOptionsViewComponent } from './check-options-view.component';

describe('CheckOptionsViewComponent', () => {
  let component: CheckOptionsViewComponent;
  let fixture: ComponentFixture<CheckOptionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOptionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOptionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
