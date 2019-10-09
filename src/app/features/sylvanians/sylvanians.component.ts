import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sylvanians',
  templateUrl: './sylvanians.component.html',
  styleUrls: ['./sylvanians.component.css']
})
export class SylvaniansComponent implements OnInit {
  image = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  i = ['','','','','',''];
  constructor() { }

  ngOnInit() {
  }

}
