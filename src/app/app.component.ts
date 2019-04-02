import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ToolbarService} from './toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        backgroundColor: '*'
      })),
      state('hide', style({
        backgroundColor: 'transparent'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  state = 'hide';
  toolbarCanBeTranslucent = true;

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.toolbarService.shouldShowToolbarTranslucent$.subscribe(isTranslucent => {
      this.state = isTranslucent ? 'hide' : 'show';
      this.toolbarCanBeTranslucent = isTranslucent;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 10) {
      this.state = 'show';
    } else {
      this.state = this.toolbarCanBeTranslucent ? 'hide' : 'show';
    }
  }
}
