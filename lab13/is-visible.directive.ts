import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {

  @Input('isVisible') value: boolean;
  constructor(private element: ElementRef) { }

  ngOnInit() {
    if(this.value) {
      this.element.nativeElement.style.visibility = 'visible';
    } else {
      this.element.nativeElement.style.visibility = 'hidden';
    }
  }

}
