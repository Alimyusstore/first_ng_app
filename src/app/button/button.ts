import { Component } from '@angular/core';

@Component({
  selector: 'buttons',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  handleClick(){
    console.log("clicked");
    this.otherCalls();
   }
   otherCalls(){
    console.log(" other Clicks");
    
   }
}
