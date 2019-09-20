import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnDestroy, OnInit {
  logoSrc: any = './assets/logo.png';
  constructor(private readonly elRef: ElementRef) {
    elRef.nativeElement.ownerDocument.body.style.background = 'rgba(255, 99, 71, 1)';
    elRef.nativeElement.ownerDocument.body.style.overflow = 'auto';
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.elRef.nativeElement.ownerDocument.body.style.background = '#f5f5f5';
    this.elRef.nativeElement.ownerDocument.body.style.overflow = null;
  }

}
