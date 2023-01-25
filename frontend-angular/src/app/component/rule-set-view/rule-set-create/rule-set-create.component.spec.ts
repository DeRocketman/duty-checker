import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleSetCreateComponent } from './rule-set-create.component';

describe('RuleSetCreateComponent', () => {
  let component: RuleSetCreateComponent;
  let fixture: ComponentFixture<RuleSetCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleSetCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleSetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
