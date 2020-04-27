import { Component, OnInit } from '@angular/core';
import { SylvaniansService } from './sylvanians.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sylvanians',
  templateUrl: './sylvanians.component.html',
  styleUrls: ['./sylvanians.component.css']
})
export class SylvaniansComponent implements OnInit {
  image = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  constructor(private readonly sylvaniansService: SylvaniansService,
    private readonly router: Router) { }
sylvanianList: any;
  ngOnInit() {
    this.getSylvanianList();
  }
  getSylvanianList() {
    this.sylvaniansService.getSylvanianList().subscribe((response)=>{
      this.sylvanianList = response;
    })
  }
  viewProfile(userId : any){
    this.router.navigate(['/profile/view-profile'], {queryParams: {id: userId}})
  }
 

}
