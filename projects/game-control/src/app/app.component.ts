import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { GameControlComponent } from './game-control/game-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EvenComponent,
    OddComponent,
    GameControlComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  oddNumArr: number[] = [];
  evenNumArr: number[] = [];

  pushValue = (num: number) => {
    if (num % 2 == 0) {
      this.evenNumArr.push(num);
    } else {
      this.oddNumArr.push(num);
    }
  };

  currentItem = 'Television';
  title = 'game-control';
  changeItem = () => {
    this.currentItem = 'Radio';
  };
}
