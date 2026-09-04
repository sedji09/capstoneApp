import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonButton, IonRouterLink } from '@ionic/angular';
import { DataService } from '../services/data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent, IonButton, IonRouterLink,
    CommonModule, FormsModule, RouterModule
  ]
})
export class LoginPage implements OnInit {

  loginType: string = 'patient';
  userId: string = '';
  userPass: string = '';
  errorMessage: string = '';
  showPassword: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // Kunin yung type from URL query parameter, halimbawa: /login?type=radtech
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
    } else if (this.loginType === 'radtech') {
      const rad = this.dataService.loginRadTech(this.userId.trim().toLowerCase(), this.userPass);
      if (rad) {
        this.router.navigate(['/radtech-portal'], { queryParams: { email: rad.email } });
      } else {
        this.errorMessage = 'Invalid RadTech ID or password.';
      }
    }
  }
}
