import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { warningOutline, eyeOutline, createOutline } from 'ionicons/icons';
import { RadiologyCase } from '../../services/data';

@Component({
  selector: 'app-case-card',
  standalone: true,
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss'],
  imports: [CommonModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, IonIcon]
})
export class CaseCardComponent {
  // Property Binding: Data passed into this reusable component
  @Input({ required: true }) caseData!: RadiologyCase;
  @Input() showActions: boolean = true;

  // Event Binding: Outputs to emit events to the parent page
  @Output() viewDetails = new EventEmitter<RadiologyCase>();
  @Output() updateStatus = new EventEmitter<RadiologyCase>();

  constructor() {
    addIcons({ warningOutline, eyeOutline, createOutline });
  }

  onViewDetails() {
    this.viewDetails.emit(this.caseData);
  }

  onUpdateStatus() {
    this.updateStatus.emit(this.caseData);
  }

  getStatusColor(status: string): string {
    if (status === 'Critical') return 'danger';
    if (status === 'Completed') return 'success';
    return 'warning';
  }
}
