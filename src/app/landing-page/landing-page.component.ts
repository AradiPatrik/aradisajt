import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll(event) {

  }
}
