import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('open', style({height: 0})),
      state('close', style({height: '*'})),
      transition('open => close', animate(500)),
      transition('close => open', animate(500))
    ]),
    trigger('enterLeave', [
      state('in', style({height: '*'})),
      transition(':enter', [
        style({height: 0}),
        animate(400)
      ]),
      transition(':leave', [
        animate(400, style({height: 0}))
      ])
    ])
  ]
})
export class CheeseComponent implements OnInit {
  state = 'close';

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.state = this.state === 'close' ? 'open' : 'close';
    console.log('this happened: ' + this.state);
  }

  onAnimationEvent(event: AnimationEvent ) {
  }
}
