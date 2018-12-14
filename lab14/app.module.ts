import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { Routes, RouterModule } from '@angular/router';
import { UserServiceService } from './user-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserGuard } from './user.guard';

const routes: Routes = [
  // {path: '', redirectTo: 'users', pathMatch: 'full' },
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserdetailsComponent
  , canActivate:[UserGuard]
}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    HttpClient,
    {provide: UserServiceService,    
      deps:[HttpClient],   
      useFactory: (http: HttpClient) => {
      return new UserServiceService(http);
    }},
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
