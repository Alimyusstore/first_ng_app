import { Component } from '@angular/core';

@Component({
  selector: 'forloop',
  imports: [],
  templateUrl: './forloop.html',
  styleUrl: './forloop.css',
})
export class Forloop {
  users: string[] = ['Ajibola', 'Alim', 'Yusuf', 'Tajudeen', 'Osude'];
  students = [
    { name: 'Ajibola', age: 27, marital: 'single' },
    { name: 'Alim', age: 28, marital: 'single' },
    { name: 'Yusuf', age: 25, marital: 'Engaged' },
    { name: 'Tajudeen', age: 60, marital: 'married' },
    { name: 'Osude', age: 26, marital: 'Engaged' },
  ];
}
