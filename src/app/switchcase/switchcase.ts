import { Component } from '@angular/core';

@Component({
  selector: 'switchcase',
  imports: [],
  templateUrl: './switchcase.html',
  styleUrl: './switchcase.css'
})
export class Switchcase {
color : string = ""
handleColor(val: string){
  this.color=val
}

changeColor(event: Event){
  this.color = (event.target as HTMLInputElement).value
}
}
