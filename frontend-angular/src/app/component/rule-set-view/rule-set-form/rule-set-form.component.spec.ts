import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetFormComponent } from './rule-set-form.component';

describe('RuleSetFormComponent', () => {
  let component: RuleSetFormComponent;
  let fixture: ComponentFixture<RuleSetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSetFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleSetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
