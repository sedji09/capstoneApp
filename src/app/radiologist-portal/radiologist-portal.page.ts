import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-radiologist-portal',
  templateUrl: './radiologist-portal.page.html',
  styleUrls: ['./radiologist-portal.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, RouterModule]
})
export class RadiologistPortalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
