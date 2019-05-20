import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  color = 'green';
  chColor() {
    return this.color === 'green'
      ? (this.color = 'red')
      : (this.color = 'green');
  }
  constructor() {}

  ngOnInit() {}
}
