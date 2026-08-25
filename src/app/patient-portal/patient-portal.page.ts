import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon } from '@ionic/angular';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data';
import { addIcons } from 'ionicons';
import { locationOutline, callOutline, mailOutline } from 'ionicons/icons';

@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.page.html',
  styleUrls: ['./patient-portal.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, RouterModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonIcon]
})
export class PatientPortalPage implements OnInit {

  patients: any = {};

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    addIcons({ locationOutline, callOutline, mailOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.patients = this.dataService.getPatient(params['email']) || {};
      }
    });
  }

}
