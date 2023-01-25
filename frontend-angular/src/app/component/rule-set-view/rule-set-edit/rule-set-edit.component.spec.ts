import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetEditComponent } from './rule-set-edit.component';

describe('RuleSetEditComponent', () => {
  let component: RuleSetEditComponent;
  let fixture: ComponentFixture<RuleSetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSetEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleSetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
