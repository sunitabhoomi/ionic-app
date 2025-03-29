import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardHeader,IonItem,IonLabel,IonInput,
  IonCardTitle,IonCardContent,IonRadioGroup,IonRadio,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardHeader,IonCardTitle,IonLabel,IonInput,IonButton,
    IonCardContent,IonRadioGroup,IonRadio,IonItem, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
