import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  group,
  state,
} from '@angular/animations';
import { Router } from '@angular/router';
import { AnimateCardComponent } from 'src/app/shared/components/animate-card/animate-card.component';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css'],
  animations: [
    trigger('ant', [
      state('normal', style({ transform: 'scale(1)' })),
      state('big', style({ transform: 'scale(2)' })),
      transition('normal => big', animate('1500ms ease-in')),
      transition('big => *', animate('500ms ease-out')),
      transition(':enter', [
        style({ transform: 'translateX(-100%' }),
        animate(500),
      ]),
      transition(':leave', [
        group([
          animate('2.2s ease', style({ transform: 'translate(150px,25px)' })),
          animate('0.5s 0.2s ease', style({ opacity: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class ScaleComponent implements OnInit {
  antStatus = 'normal';
  noDisplay = false;
  imageSrcTop = '../../../assets/cities/qatar.svg';
  imageSrcBottom = '../../../assets/cities/tunis.svg';
  imageSloganTop = 'Qatar';
  imageSloganBottom = 'Tunis';
  showTop = true;

  constructor(public router: Router) {}
  toggleSize() {
    this.antStatus = this.antStatus === 'normal' ? 'big' : 'normal';
  }

  ngOnInit(): void {}

  toggleDisplay() {
    this.noDisplay = !this.noDisplay;
  }
  toggleTopBottom() {
    this.showTop = !this.showTop;
  }
}
