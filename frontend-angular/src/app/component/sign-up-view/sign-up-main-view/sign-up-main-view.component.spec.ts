import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMainViewComponent } from './sign-up-main-view.component';

describe('SignUpMainViewComponent', () => {
  let component: SignUpMainViewComponent;
  let fixture: ComponentFixture<SignUpMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
