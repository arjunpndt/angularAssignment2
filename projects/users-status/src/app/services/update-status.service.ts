import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UpdateStatusService {
  data: [string] = ['arjun'];
  // users: User[] = [];
  users: User[] = [
    new User('Arjun Pandit  ', 'active'),
    new User('Atul Sharma', 'inactive'),
    new User('Aniket Sharma', 'inactive'),
    new User('Priya Vats', 'inactive'),
    new User('Vibhu Mishra', 'active'),
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
