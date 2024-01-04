import { Component } from '@angular/core';
import { UpdateStatusService } from '../services/update-status.service';
import { CommonModule } from '@angular/common';
import { User } from '../Models/User';
@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css',
  // providers: [UpdateStatusService],
})
export class ActiveUsersComponent {
  constructor(private updateStatusService: UpdateStatusService) {}

  userList = this.updateStatusService.getAllUsers();

  updateStatus = (user: User) => {
    this.updateStatusService.changeStatus(user);
  };
}
