import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ToolbarService} from '../toolbar.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.hideToolbar();
  }
}
