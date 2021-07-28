import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService as UiService } from './core/services/theme/theme.service';
import { FirebaseAuthService as FbService } from './core/services/firebase-auth/firebase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showMenu = false;
  darkModeActive = false;

  userEmail?: string | null;

  constructor(
    public ui: UiService,
    public fb: FbService,
    public router: Router
  ) {}

  loggedIn = this.fb.isAuth();
  sub1: any;

  ngOnInit() {
    this.sub1 = this.ui.isDarkTheme.subscribe((value) => {
      this.darkModeActive = value;
    });

    this.fb.userData().subscribe((user) => {
      this.userEmail = user?.email;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.setDarkTheme(!this.darkModeActive);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  logout() {
    this.toggleMenu();
    this.router.navigateByUrl('/login');
    this.fb.logout();
  }
}
