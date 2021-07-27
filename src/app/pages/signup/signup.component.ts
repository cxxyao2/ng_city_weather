import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService as FbService } from 'src/app/core/services/firebase-auth/firebase-auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorMessage = '';

  constructor(public fb: FbService, public router: Router) {}

  ngOnInit() {}

  signup(e: any) {
    this.fb
      .signup(e.target.email.value, e.target.password.value);

  }
}
