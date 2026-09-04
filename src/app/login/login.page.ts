import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';
import { DataService } from '../services/data';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, FormsModule, IonContent, IonButton, RouterLink]
})
export class LoginPage {

  private router = inject(Router);
  private dataService = inject(DataService);

  userId: string = '';
  userPass: string = '';
  showPassword: boolean = false;

  doLogin() {
    const email = this.userId.trim().toLowerCase();
    const pass = this.userPass;

    // Check kung Patient ang user
    const patient = this.dataService.loginPatient(email, pass);
    if (patient) {
      this.router.navigate(['/patient-portal']);
      return;
    }

    // Check kung RadTech ang user
    const rad = this.dataService.loginRadTech(email, pass);
    if (rad) {
      this.router.navigate(['/radtech-portal']);
      return;
    }

    alert('Invalid email or password. Please check your credentials.');
  }
}
