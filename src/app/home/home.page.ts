import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonCard, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, RouterModule],
})
export class HomePage {
  constructor() { }
}
