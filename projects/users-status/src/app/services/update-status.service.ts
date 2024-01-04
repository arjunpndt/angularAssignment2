import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UpdateStatusService {
  data: [string] = ['arjun'];
  // users: User[] = [];
  users: User[] = [
    new User('Arjun', 'active'),
    new User('Rama', 'inactive'),
    new User('Ankit', 'inactive'),
    new User('Prince', 'inactive'),
    new User('Aman', 'active'),
  ];
  getAllUsers = () => {
    return this.users;
  };
  changeStatus = (user: User) => {
    var index = this.users.indexOf(user);
    user.status === 'active'
      ? (user.status = 'inactive')
      : (user.status = 'active');
  };
  addUser = (user: User) => {
    this.users.push(user);
  };
}
