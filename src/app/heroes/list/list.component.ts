import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public nombresHeroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  public deletedHeroe?:string;

  removeHeroe():void {
    this.deletedHeroe = this.nombresHeroes.pop();
  }
}
