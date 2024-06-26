import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>counter: {{counter}}</h2>

  <button (click)="incrementBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="incrementBy(-1)">-1</button>
  `,

})
export class CounterComponent {

  public counter: number = 10;

  incrementBy(value:number):void {
    this.counter += value;
  }
  resetCounter():void {
    this.counter = 10;
  }
}
