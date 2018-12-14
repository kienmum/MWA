import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: User[];
    constructor(private http: HttpClient) {
        this.users = [];
        for(let i=0; i<10; i++) {
            let user = new User(
                i + '',
                "Kevin" + i
            //     ,
            // '',
            // '',
            // '',
            // '',
            // '',
            // '',
            // '',
            // '',
            // '',
            // ''
            );
            this.users.push(user);
        }
        this.http.get('https://randomuser.me/api/?results=10')
       .subscribe(data => {
            
            console.log(data);
            localStorage.setItem('users', JSON.stringify(<any>data['results'].map(u => {
              let id = <any>u.login.username;
              let name = <any>u.name.first + ' ' + <any>u.name.last;
              console.log(id + ' ' + name);
              return new User(id, name);
            })));
        }
        )

    }

    getUsers(): User[] {
      this.users = JSON.parse(localStorage.getItem('users'));
      return this.users;
    }

    getUser(id:string): User {
        return this.users.find(u => u.id == id);
    }
}
