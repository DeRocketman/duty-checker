import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResultViewComponent } from './review-result-view.component';

describe('ReviewResultViewComponent', () => {
  let component: ReviewResultViewComponent;
  let fixture: ComponentFixture<ReviewResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewResultViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
