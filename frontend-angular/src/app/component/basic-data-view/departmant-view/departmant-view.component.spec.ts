import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmantViewComponent } from './departmant-view.component';

describe('DepartmantViewComponent', () => {
  let component: DepartmantViewComponent;
  let fixture: ComponentFixture<DepartmantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmantViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
