import { Component, Input } from '@angular/core';

@Component({
  selector: 'signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
@Input() user:string = '' 
}
