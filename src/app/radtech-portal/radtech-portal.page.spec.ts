import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadtechPortalPage } from './radtech-portal.page';

describe('RadtechPortalPage', () => {
  let component: RadtechPortalPage;
  let fixture: ComponentFixture<RadtechPortalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadtechPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
