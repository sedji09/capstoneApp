import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientPortalPage } from './patient-portal.page';

describe('PatientPortalPage', () => {
  let component: PatientPortalPage;
  let fixture: ComponentFixture<PatientPortalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
