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
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
    trigger('ant', [
      transition(':enter', [
        style({
          transform: 'translateY(50%)',
          opacity:'0'
        }),
        animate(1000),
      ]),
    ]),
  ],
})
export class SlideComponent implements OnInit {
  antStatus = 'normal';
  noDisplay = false;
  qatar = '../../../assets/cities/qatar.svg';
  tunis = '../../../assets/cities/tunis.svg';
  imageSrcTop = this.qatar;
  imageSrcBottom = this.tunis;
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
    this.imageSrcTop =
      this.imageSrcTop === this.tunis ? this.qatar : this.tunis;
    this.showTop = true;
    setTimeout(() => {
      this.imageSrcBottom = this.imageSrcTop;
      this.showTop = false;
    }, 1000);
  }
}
