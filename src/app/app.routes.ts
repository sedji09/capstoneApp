import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'patient-portal',
    loadComponent: () => import('./patient-portal/patient-portal.page').then( m => m.PatientPortalPage)
  },
  {
    path: 'radiologist-portal',
    loadComponent: () => import('./radiologist-portal/radiologist-portal.page').then( m => m.RadiologistPortalPage)
  },
];
