import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ConnectionService {
    constructor(private http: HttpClient) { }

    signup(body) {
        return this.http.post('http://localhost:4000/api/v1/auth/signup', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }

    login(body) {
        return this.http.post('http://localhost:4000/api/v1/auth/login', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
    
    loadProtectedPage() {
        return this.http.get('http://localhost:4000/api/v1/protected');
    }
  }