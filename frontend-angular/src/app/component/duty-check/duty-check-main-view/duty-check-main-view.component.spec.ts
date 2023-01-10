import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyCheckMainViewComponent } from './duty-check-main-view.component';

describe('DutyCheckMainViewComponent', () => {
  let component: DutyCheckMainViewComponent;
  let fixture: ComponentFixture<DutyCheckMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DutyCheckMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DutyCheckMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
