import { Injectable } from '@angular/core';
import { Sample } from './sample';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class UsersService {

  private _userUrl = './api/users/users.json';

  constructor(private _http: HttpClient) { }

  getPersons(): Observable<Sample[]> {
    return this._http.get<Sample[]>(this._userUrl);
  }

  getMorePeople(): Observable<Sample[]> {
    const sampleResponse: Sample[] = [
      { name: 'Treck', phone: '876-985-0000', address: { street: '100 Trench ST', city: 'Frank', state: 'IL', zip: 60001 } },
      { name: 'Pass', phone: '876-985-0001', address: { street: '101 Trench ST', city: 'Peter', state: 'IL', zip: 60002 } },
      { name: 'Push', phone: '876-985-0002', address: { street: '102 Trench ST', city: 'Steve', state: 'IL', zip: 60003 } },
      { name: 'Press', phone: '876-985-0003', address: { street: '103 Trench ST', city: 'James', state: 'IL', zip: 60004 } }
    ];

    return Observable.of(sampleResponse).delay(3000);
  }
}
