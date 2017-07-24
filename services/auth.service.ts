import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  registerUser(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/register', user, {headers: headers})
      .map(res => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
