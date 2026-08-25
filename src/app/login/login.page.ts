import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardContent, IonText, IonIcon
} from '@ionic/angular';
import { DataService } from '../services/data';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, IonItem, IonLabel, 
    IonInput, IonButton, IonCard, IonCardContent, IonText, IonIcon, RouterModule
  ]
})
export class LoginPage implements OnInit {

  loginType: string = 'patient';
  userId: string = '';
  userPass: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // Kunin yung type from URL query parameter, halimbawa: /login?type=radiologist
    this.route.queryParams.subscribe(params => {
      if (params['type']) {
        this.loginType = params['type'];
      }
    });
  }

  doLogin() {
    this.errorMessage = ''; // reset error
    
    if (this.loginType === 'patient') {
      const patient = this.dataService.loginPatient(this.userId.trim().toLowerCase(), this.userPass);
      if (patient) {
        // Pumasok! Navigate sa portal at ipasa ang email
        this.router.navigate(['/patient-portal'], { queryParams: { email: patient.email } });
      } else {
        this.errorMessage = 'Invalid Patient ID or password.';
      }
    } else if (this.loginType === 'radiologist') {
      const rad = this.dataService.loginRadiologist(this.userId.trim().toLowerCase(), this.userPass);
      if (rad) {
        this.router.navigate(['/radiologist-portal'], { queryParams: { email: rad.email } });
      } else {
        this.errorMessage = 'Invalid Radiologist ID or password.';
      }
    }
  }
}
