import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDataMainViewComponent } from './basic-data-main-view.component';

describe('BasicDataMainViewComponent', () => {
  let component: BasicDataMainViewComponent;
  let fixture: ComponentFixture<BasicDataMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDataMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDataMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
