import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnDestroy, OnInit {
  logoSrc: any = './assets/logo2.png';
  constructor(private readonly elRef: ElementRef) {
    elRef.nativeElement.ownerDocument.body.style.background = '#6b5b95'; 
    elRef.nativeElement.ownerDocument.body.style.overflow = 'auto';
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.elRef.nativeElement.ownerDocument.body.style.background = '#f5f5f5';
    this.elRef.nativeElement.ownerDocument.body.style.overflow = null;
  }

}
