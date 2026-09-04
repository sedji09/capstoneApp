import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonModal, CaseCardComponent
  ]
})
export class PatientPortalPage implements OnInit {

  // Service - data provider
  private dataService = inject(DataService);

  patient: any = {};
  patientCases: RadiologyCase[] = [];

  selectedCase: RadiologyCase | null = null;
  isModalOpen: boolean = false;

  constructor() {
    addIcons({ logOutOutline, locationOutline, callOutline, mailOutline, addOutline, closeOutline });
  }

  ngOnInit() {
    this.patient = this.dataService.currentPatient || this.dataService.patients[0];
    if (this.patient && this.patient.patientId) {
      this.patientCases = this.dataService.getPatientCases(this.patient.patientId);
    }
  }

  onViewDetails(caseItem: RadiologyCase) {
    this.selectedCase = caseItem;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCase = null;
  }
}
