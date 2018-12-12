import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump-component',
  template: `
    {{x}}
  `,
  styleUrls: ['./dump-component.component.css']
})
export class DumpComponentComponent implements OnInit {

  @Input('data') x: string;
  constructor() {}

  ngOnInit() {
  }

}
