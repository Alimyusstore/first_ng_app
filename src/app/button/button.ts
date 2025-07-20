import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'buttons',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Output() getUsers = new EventEmitter();
  userNs = ['Alim', 'Ajibola', 'Osude', 'tajudeen'];
  passUsers(){
    this.getUsers.emit(this.userNs);
  }
  handleClick() {
    console.log('clicked');
    this.otherCalls();
  }
  otherCalls() {
    console.log(' other Clicks');
  }
}
