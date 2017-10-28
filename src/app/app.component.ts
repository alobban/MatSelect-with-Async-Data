import { Component, OnInit } from '@angular/core';
import { Sample } from './sample';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Testing Material Select with Async Data';

  persons: Sample[];
  morePersons: Sample[];
  addressBook: FormGroup;

  constructor(public usersService: UsersService, private fb: FormBuilder) {
    this.generateForm();
  }

  ngOnInit() {
    this.usersService.getPersons().subscribe(
      users => {
        this.persons = users;
        // console.log(this.persons);
      }
    );

    this.usersService.getMorePeople().subscribe(
      users => {
        this.morePersons = users;
        console.log(this.morePersons);
      }
    )
  }

  generateForm() {
    this.addressBook = this.fb.group({
      contact: '',
      additional: ''
    });
  }

  formatUserDisplay(person: any): string {
    return person ? person.name + ', ' + person.address.city : person;
  }

}
