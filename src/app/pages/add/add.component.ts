import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { FirebaseService as FbService } from 'src/app/core/services/firebase/firebase.service';

import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { routerTransition } from 'src/app/shared/animations/router.animations';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' },
})
export class AddComponent implements OnInit, OnDestroy {
  temp?: number;
  city = 'Rome';
  state?: string;
  capitals: string[] = [];
  cityList: string[] = [];
  selectedCity?: any;
  cardCity?: any;
  showNotFound = false;
  followedCM = false;
  sub1?: Subscription;
  maxNumList = 5; // TODO number of cities under input
  showList = true;

  constructor(
    public http: HttpClient,
    public weather: WeatherService,
    public fb: FbService
  ) {}

  ngOnInit() {
    // getting the city placeID
    this.weather.getWeather(this.city).subscribe((payload: any) => {
      this.state = payload.weather[0].main;
      this.temp = Math.ceil(Number(payload.main.temp));
    });
    this.http
      .get('https://restcountries.eu/rest/v2/all')
      .pipe(first())
      .subscribe((countries: any) => {
        countries.forEach((country: any) => {
          if (country.capital.length) {
            this.capitals.push(country.capital);
          }
        });
        this.capitals.sort();
      });

    this.sub1 = this.fb.getCities().subscribe((cities) => {
      Object.values(cities).forEach((city: any) => {
        if (city.name === 'Rome') {
          this.followedCM = true;
        }
      });
    });
  }

  selectCity(city: any) {
    if (this.capitals.includes(city)) {
      this.cardCity = city;
      this.showNotFound = false;
    } else if (city.length > 0) {
      this.showNotFound = true;
      this.cardCity = null;
    }
    this.showList = false;
  }

  addCityOfTheMonth() {
    this.fb.addCity('Rome').subscribe(() => {
      this.followedCM = true;
    });
  }

  inputChange(city: string) {
    if (city.length > 0) {
      this.cityList = this.capitals.filter((capital) =>
        capital.toLowerCase().includes(city.toLowerCase())
      );
    } else {
      this.cityList = this.capitals.slice(0, 6);
    }
    this.showList = true;
  }

  selectedOne(city: string) {
    console.log(city);
    this.selectedCity = city;
    this.showList = false;
  }

  ngOnDestroy() {
    this.sub1?.unsubscribe();
  }
}
