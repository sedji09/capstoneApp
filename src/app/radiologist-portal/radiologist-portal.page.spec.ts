import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadiologistPortalPage } from './radiologist-portal.page';

describe('RadiologistPortalPage', () => {
  let component: RadiologistPortalPage;
  let fixture: ComponentFixture<RadiologistPortalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologistPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
