import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddstudentComponent } from './admin-addstudent.component';

describe('AdminAddstudentComponent', () => {
  let component: AdminAddstudentComponent;
  let fixture: ComponentFixture<AdminAddstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
