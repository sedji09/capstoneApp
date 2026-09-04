import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton,
  IonSearchbar,
  IonModal,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonIcon
} from '@ionic/angular';
import { DataService, RadiologyCase } from '../services/data';
import { CaseCardComponent } from '../components/case-card/case-card.component';
import { addIcons } from 'ionicons';
import { logOutOutline, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-radtech-portal',
  standalone: true,
  templateUrl: './radtech-portal.page.html',
  styleUrls: ['./radtech-portal.page.scss'],
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
    IonSearchbar,
    IonModal,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonIcon,
    CaseCardComponent
  ]
})
export class RadtechPortalPage implements OnInit {

  // Interpolation: RadTech Info
  radtechName: string = 'John Doe, RRT';
  cases: RadiologyCase[] = [];

  // Form Binding [(ngModel)]: Search Query
  searchText: string = '';

  // Selected case for details / update modal
  selectedCase: RadiologyCase | null = null;
  isModalOpen: boolean = false;
  modalMode: 'view' | 'update' = 'view';
  newStatus: 'Pending' | 'Completed' | 'STAT' = 'Pending';

  constructor(private dataService: DataService) {
    addIcons({ logOutOutline, closeOutline });
  }

  ngOnInit() {
    this.cases = this.dataService.getCases();
  }

  // Filter cases with searchText
  get filteredCases(): RadiologyCase[] {
    if (!this.searchText) {
      return this.cases;
    }
    return this.cases.filter(c => 
      c.patientName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      c.caseNumber.toLowerCase().includes(this.searchText.toLowerCase()) ||
      c.modality.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Event Binding Handlers
  onViewDetails(caseItem: RadiologyCase) {
    this.selectedCase = caseItem;
    this.modalMode = 'view';
    this.isModalOpen = true;
  }

  onUpdateStatus(caseItem: RadiologyCase) {
    this.selectedCase = caseItem;
    this.newStatus = caseItem.status;
    this.modalMode = 'update';
    this.isModalOpen = true;
  }

  saveStatus() {
    if (this.selectedCase) {
      this.dataService.updateStatus(this.selectedCase.id, this.newStatus);
      this.cases = this.dataService.getCases();
      this.isModalOpen = false;
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCase = null;
  }
}
