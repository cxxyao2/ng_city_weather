import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  group,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.css'],
  animations: [
    trigger('ant', [
      state('normal', style({ transform: 'scale(1)' })),
      state('big', style({ transform: 'scale(2)' })),
      transition('normal => big', animate('500ms ease-in')),
      transition('big => *', animate('500ms ease-out')),
      transition(':enter', [
        style({ transform: 'translateX(-100%' }),
        animate(500),
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({ transform: 'translate(150px,25px' })),
          animate('0.5s 0.2s ease', style({ opacity: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class ScaleComponent implements OnInit {
  antStatus = 'normal';
  toggle() {
    this.antStatus = this.antStatus === 'normal' ? 'end' : 'normal';
  }
  constructor() {}

  ngOnInit(): void {}
}
