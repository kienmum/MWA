import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../app.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  response: any;
  constructor(private service: ConnectionService) { }

  ngOnInit() {
      this.service.loadProtectedPage().subscribe((response:any) => {
        this.response = response.message;
      })
  }

}
