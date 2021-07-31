import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AppGuard } from './core/guards/app.guard';
import { SlideComponent } from './pages/slide/slide.component';
import { FadeComponent } from './pages/fade/fade.component';
import { RotateComponent } from './pages/rotate/rotate.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AppGuard] },
  {
    path: 'details/:city',
    component: DetailsComponent,
    canActivate: [AppGuard],
  },
  { path: 'add', component: AddComponent, canActivate: [AppGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { path: 'slide', component: SlideComponent },
  { path: 'fade', component: FadeComponent },
  { path: 'rotate', component: RotateComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
