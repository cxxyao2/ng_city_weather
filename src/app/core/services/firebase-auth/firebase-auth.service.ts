import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { mergeMap } from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { EMPTY, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  // sign-in method: email + password
  signin(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        this.router.navigateByUrl('/home');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  signup(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        this.router.navigate(['home']);
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.code && ' ' && error.message);
      });
  }
  // sign-in method: google
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider).then((value) => {
      console.log('Success', value);
      this.router.navigateByUrl('/home');
    });
  }

  // sign-in method: twitter
  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider).then((value) => {
      console.log('Success', value);
      this.router.navigateByUrl('/home');
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider);
  }

  isAuth(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      mergeMap((x) => (x === null ? of(false) : of(true)))
    );
  }

  userData() {
    return this.afAuth.authState;
  }
}
