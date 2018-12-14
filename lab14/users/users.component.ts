import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserServiceService) { 
    this.users = userService.getUsers();
  }

  ngOnInit() {
  }

}
