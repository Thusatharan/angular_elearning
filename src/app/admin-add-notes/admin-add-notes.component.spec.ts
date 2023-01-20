import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNotesComponent } from './admin-add-notes.component';

describe('AdminAddNotesComponent', () => {
  let component: AdminAddNotesComponent;
  let fixture: ComponentFixture<AdminAddNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
