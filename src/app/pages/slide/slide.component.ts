import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
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
  constructor() {}

  ngOnInit(): void {}
}
