import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { DetailsComponent } from './pages/details/details.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddCardComponent } from './shared/components/add-card/add-card.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { WeatherCardComponent } from './shared/components/weather-card/weather-card.component';

import { AnimateCardComponent } from './shared/components/animate-card/animate-card.component';

import { RulerComponent } from './shared/component/ruler/ruler.component';
import { GradientBorderComponent } from './shared/component/gradient-border/gradient-border.component';
import { TriggerSlideComponent } from './pages/trigger-slide/trigger-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent,
    ErrorComponent,
    WeatherCardComponent,
    AnimateCardComponent,
    RulerComponent,
    GradientBorderComponent,
    TriggerSlideComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
