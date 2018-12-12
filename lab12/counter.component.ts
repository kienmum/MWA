import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="decrease()">-</button>
  {{counterValue}}
  <button (click)="increase()">+</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input('counter') counterValue: number;
  @Output() counterChange: EventEmitter<number>;

  constructor() { 
    this.counterValue = 0;
    this.counterChange = new EventEmitter();
    // this.counterChange.emit(this.counterValue);
  }

  notify():void {
    this.counterChange.emit(this.counterValue);
  }

  increase() {
    ++this.counterValue;
    this.notify();
    return false;
  }

  decrease() {
    --this.counterValue;
    this.notify();
    return false;
  }

  keyInput(event){
    this.counterValue = event.target.value;
    this.notify();
  }
  ngOnInit() {
  }

}
