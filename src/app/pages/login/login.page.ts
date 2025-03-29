import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonCard,IonCardContent ,IonCardTitle,IonCardHeader,IonInput,IonItem,IonLabel,IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent,IonCard, IonCardContent,IonCardTitle,IonCardHeader,IonInput,IonItem,IonLabel,IonButton,CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
