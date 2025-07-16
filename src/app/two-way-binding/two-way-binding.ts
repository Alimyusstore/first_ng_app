import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  name = 'alim';
  namee = 'ajibola';
  changeName(event : Event){
   const val = (event.target as HTMLInputElement).value;
   this.namee = val;
  };
}
