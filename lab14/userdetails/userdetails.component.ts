import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user: User;

  id:string;

  constructor(private userService: UserServiceService, private activedrouter: ActivatedRoute) {
    activedrouter.params.subscribe(params => {
      this.id = params['id'];
      // console.log('userdetails');
      if(this.id) {
        this.user = userService.getUser(this.id);
        // console.log(this.id);
      }
    });
   }

  ngOnInit() {
  }

}
