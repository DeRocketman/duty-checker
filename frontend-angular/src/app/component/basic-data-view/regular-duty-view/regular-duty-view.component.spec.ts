import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularDutyViewComponent } from './regular-duty-view.component';

describe('RegularDutyViewComponent', () => {
  let component: RegularDutyViewComponent;
  let fixture: ComponentFixture<RegularDutyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularDutyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularDutyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
