import { Component, OnInit } from '@angular/core';
import {ToolbarService} from '../toolbar.service';

@Component({
  selector: 'app-cheeses',
  templateUrl: './cheeses.component.html',
  styleUrls: ['./cheeses.component.scss']
})
export class CheesesComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.showToolbar();
  }

}
