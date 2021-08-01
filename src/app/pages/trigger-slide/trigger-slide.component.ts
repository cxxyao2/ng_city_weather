import { Component, OnInit } from '@angular/core';
import {
  transition,
  state,
  style,
  trigger,
  useAnimation,
  animate,
} from '@angular/animations';
import { slideAnimation } from 'src/app/shared/animations/slide.animations';
import { Observable, of, timer } from 'rxjs';
import {
  customSlide,
  customRotate,
  customFade,
} from 'src/app/shared/animations/triggers.animations';
import { concatMap, delay, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-trigger-slide',
  templateUrl: './trigger-slide.component.html',
  styleUrls: ['./trigger-slide.component.css'],
  animations: [customSlide, customRotate, customFade],
})
export class TriggerSlideComponent implements OnInit {
  antStatus = 'normal';
  noDisplay = false;
  innerWidth = 300;
  innerHeight = 400;
  darkMode = false;

  qatar = '../../../assets/cities/qatar.svg';
  tunis = '../../../assets/cities/tunis.svg';
  imageSrcTop = this.qatar;
  imageSrcBottom = this.tunis;
  imageSloganTop = 'Qatar';
  imageSloganBottom = 'Tunis';
  imageSrc = this.qatar;
  showTop = true;
  ob1 = timer(0, 2000);
  speed = 1000;
  leaveSpeed = 2000;
  oldTop = '';

  constructor() {}

  ngOnInit(): void {
    const example1 = this.ob1.pipe(
      tap((data) => {
        this.imageSrc = `https://picsum.photos/${this.innerWidth}/${this.innerHeight}?random=${data}`;
        this.showTop = !this.showTop;
      })
    );
    example1.subscribe((data) => {
      console.log(data);
    });
  }
}
