import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`
  <app-counter [counter]="defaultCounter" (counterChange)="changedValue($event)"></app-counter>
  <br/>
  Component Counter Value = {{componentCounterValue}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';
  defaultCounter: number = 100;
  componentCounterValue: number;
  changedValue(event):void {
    console.log(event);
    this.componentCounterValue = event;
  }
}
