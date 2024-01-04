import { Component } from '@angular/core';
import { UpdateStatusService } from '../services/update-status.service';
import { CommonModule } from '@angular/common';
import { User } from '../Models/User';
// import { ActiveUsersComponent } from '../active-users/active-users.component';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css',
  // providers: [UpdateStatusService],
})
export class InactiveUsersComponent {
  constructor(private updateStatusService: UpdateStatusService) {}
  userList = this.updateStatusService.getAllUsers();
  updateStatus = (user: User) => {
    this.updateStatusService.changeStatus(user);
  };
  status = 'Set to active';
}
