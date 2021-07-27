import { Component, OnInit } from '@angular/core';

import { first, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseAuthService as FbService } from '../../core/services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  constructor(public fb: FbService, public router: Router) {}

  ngOnInit() {}

  login(e: any) {
    this.fb
      .signin(e.target.email.value, e.target.password.value);

  }
}
