import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonModal
} from '@ionic/angular';
import { DataService, RadiologyCase } from '../services/data';
import { CaseCardComponent } from '../components/case-card/case-card.component';
import { addIcons } from 'ionicons';
import { locationOutline, callOutline, mailOutline, logOutOutline, closeOutline, addOutline } from 'ionicons/icons';

@Component({
  selector: 'app-patient-portal',
  standalone: true,
  templateUrl: './patient-portal.page.html',
  styleUrls: ['./patient-portal.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonModal,
    CaseCardComponent
  ]
})
export class PatientPortalPage implements OnInit {

  // Interpolation: Patient Data
  patient: any = {};
  patientCases: RadiologyCase[] = [];

  // Modal view for details
  selectedCase: RadiologyCase | null = null;
  isModalOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    addIcons({ logOutOutline, locationOutline, callOutline, mailOutline, addOutline, closeOutline });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const email = params['email'] || 'juandelacruz@gmail.com';
      this.patient = this.dataService.getPatient(email) || this.dataService.patients[0];

      if (this.patient && this.patient.patientId) {
        this.patientCases = this.dataService.getPatientCases(this.patient.patientId);
      }
    });
  }

  // Event Binding Handler: View Details
  onViewDetails(caseItem: RadiologyCase) {
    this.selectedCase = caseItem;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCase = null;
  }
}
