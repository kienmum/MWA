import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[loggable]'
})
export class LoggableDirective {

  constructor() { }

  @HostListener('dblclick') dblclick() {
    console.log('DIV element has been clicked.');
  }

}
