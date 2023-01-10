import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetMainViewComponent } from './rule-set-main-view.component';

describe('RuleSetMainViewComponent', () => {
  let component: RuleSetMainViewComponent;
  let fixture: ComponentFixture<RuleSetMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSetMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleSetMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
