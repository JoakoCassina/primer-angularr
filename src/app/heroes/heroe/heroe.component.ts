import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
     this.name = "capitan america";
  }
  changeAge(): void {
     this.age = 29
  }
  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

