import { Component } from '@angular/core';

@Component({
  selector: 'ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  display: boolean = true;

  hide() {
    this.display = false;
  }
  show() {
    this.display = true;
  }
  toggle() {
    this.display = !this.display;
  }
}
