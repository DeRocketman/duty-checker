import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInMainViewComponent } from './sign-in-main-view.component';

describe('SignInMainViewComponent', () => {
  let component: SignInMainViewComponent;
  let fixture: ComponentFixture<SignInMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
