import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  show: boolean = true;
  block: number = 1;
  log: boolean = true;
  color: string = '';
  students: string[] = ['Alim', 'Ajibola', 'Yusuf', 'Tajudeen', 'Osude'];
  workers: { name: string; work: string; age: number }[] = [
    { name: 'Osude', work: 'banker', age: 26 },
    { name: 'Alim', work: 'engineer', age: 28 },
    { name: 'Ajibola', work: 'developer', age: 27 },
    { name: 'Yusuf', work: 'doctor', age: 29 },
    { name: 'Tajudeen', work: 'investor', age: 25 },
  ];
  toggle() {
    this.show = !this.show;
  }
  handleBlock() {
    this.block++;
    this.block > 4 ? (this.block = 1) : this.block;
  }
  toggleLog() {
    this.log = !this.log;
  }

  changeColor(color:string){
this.color=color
  };
}
