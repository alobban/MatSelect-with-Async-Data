import { Injectable } from '@angular/core';
import { Sample } from './sample';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private _userUrl = './api/users/users.json';

  constructor(private _http: HttpClient) { }

  getPersons(): Observable<Sample[]> {
    return this._http.get<Sample[]>(this._userUrl);
  }
}
