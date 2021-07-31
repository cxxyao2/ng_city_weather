import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css'],
})
export class FadeComponent implements OnInit {
  antStatus = 'normal';
  noDisplay = false;
  xxxbackgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
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
