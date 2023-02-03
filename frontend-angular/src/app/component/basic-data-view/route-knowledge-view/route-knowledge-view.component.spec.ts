import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteKnowledgeViewComponent } from './route-knowledge-view.component';

describe('RouteKnowledgeViewComponent', () => {
  let component: RouteKnowledgeViewComponent;
  let fixture: ComponentFixture<RouteKnowledgeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteKnowledgeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteKnowledgeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
