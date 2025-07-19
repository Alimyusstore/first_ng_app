import { Component, Input } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
@Input() user:string = ''
}
