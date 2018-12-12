import { Component, OnInit, Input } from '@angular/core';
import {DumpComponentComponent} from '../dump-component/dump-component.component'

@Component({
  selector: 'app-smart-component',
  template: `
    <ul>
      <li *ngFor="let x of arr">
        <app-dump-component [data]='x'></app-dump-component>
      </li>
    </ul>
  `,
  styleUrls: ['./smart-component.component.css']
})
export class SmartComponentComponent implements OnInit {

  arr: String[];
  constructor() { 
    this.arr = ['FPP', 'MPP', 'WAP', 'WAA', 'MWA'];
  }

  ngOnInit() {
  }

}
