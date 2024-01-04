import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  // @Input() item: string = '';
  @Output() updateDta = new EventEmitter<number>();

  constructor() {}
  // ngOnInit() {}
  interval: any;
  num: number = 0;

  start = () => {
    this.interval = setInterval(() => {
      this.updateDta.emit(this.num);
      this.num++;
      console.log(this.num);
    }, 1000);
  };
  stop = () => {
    clearInterval(this.interval);

    console.log('game stoped');
  };
}
