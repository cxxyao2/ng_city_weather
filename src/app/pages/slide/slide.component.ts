import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit {
  antStatus = 'normal';
  noDisplay = false;
  innerWidth = 300;
  innerHeight = 400;

  qatar = '../../../assets/cities/qatar.svg';
  tunis = '../../../assets/cities/tunis.svg';
  imageSrcTop = this.qatar;
  imageSrcBottom = this.tunis;
  imageSloganTop = 'Qatar';
  imageSloganBottom = 'Tunis';
  showTop = true;
  sub1 = timer(500, 2000);

  constructor() {}

  ngOnInit(): void {
    this.sub1.subscribe(
      (data) => {
        const oldTop = this.imageSrcTop;
        this.imageSrcTop = `https://picsum.photos/${this.innerWidth}/${this.innerHeight}?random=${data}`;
        this.showTop = true;
        setTimeout(() => {
          this.imageSrcBottom = oldTop;
          this.showTop = false;
        }, 1000);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
