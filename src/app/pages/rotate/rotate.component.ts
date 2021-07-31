import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.css'],
})
export class RotateComponent implements OnInit {
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
