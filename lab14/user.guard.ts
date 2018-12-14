import { UserServiceService } from './user-service.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class UserGuard implements CanActivate {
    constructor(private userservice: UserServiceService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        console.log(route.params['id']);
        console.log(state);
        return this.userservice.getUser(route.params['id']) != null;//confirm('Are you sure?');
      }
}