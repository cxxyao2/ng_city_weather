import { Component, OnInit } from '@angular/core';
import { FirebaseService as FbService } from 'src/app/core/services/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cities?: any;

  constructor(public fb: FbService) {}

  ngOnInit() {
    this.cities = this.fb.getCities();
  }
}
