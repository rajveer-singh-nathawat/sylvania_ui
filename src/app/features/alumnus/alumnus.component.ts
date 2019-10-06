import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnus',
  templateUrl: './alumnus.component.html',
  styleUrls: ['./alumnus.component.css']
})
export class AlumnusComponent implements OnInit {

  image = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  i=['',''];

  constructor() { }

  ngOnInit() {
  }

}
