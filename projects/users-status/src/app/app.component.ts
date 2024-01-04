import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UpdateStatusService } from './services/update-status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UpdateStatusService],
})
export class AppComponent {
  title = 'users-status';
}
