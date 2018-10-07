import {Component, OnInit} from '@angular/core';

import {DataService} from "../../../services/data.service";
import {IRandomUserAPI, IRandomUserResult} from "../../../models/random-user.model";

@Component({
  selector: 'echo-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: IRandomUserResult[];
  usersCount: number = 5;

  addFormState: boolean = false;

  listHeaders: string[] = [
    'last',
    'first',
    'username',
    'phone',
    'location'
  ];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.dataService.getDataFromApi(this.usersCount)
      .subscribe((response: IRandomUserAPI) => {
        this.usersList = response.results.map((result) => {
          return {
            ...result,
            collapsed: false
          }
        });
        console.log(this.usersList);
      });
  }

  toggleCollapse(inputUser: IRandomUserResult) {
    this.usersList.forEach(item => {
      if (item === inputUser) {
        item.collapsed = inputUser.collapsed;
      } else {
        item.collapsed = false;
      }
    });
  }

  removeUserFromList(inputUser: IRandomUserResult) {
    this.usersList.splice(this.usersList.indexOf(inputUser), 1);
  }

  openCloseAddNewUserForm() {
    this.addFormState = !this.addFormState;
  }

  addNewUser(newUser: IRandomUserResult) {
    this.usersList.push(newUser);
    this.openCloseAddNewUserForm();
  }

}
