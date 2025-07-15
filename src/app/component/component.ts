import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { Button } from '../button/button';
import { Counter } from '../counter/counter';
import { Get } from '../get/get';
import { Ifelse } from '../ifelse/ifelse';
import { Switchcase } from '../switchcase/switchcase';

@Component({
  selector: 'component',
  imports: [Login, Signup, Button, Counter, Get, Ifelse, Switchcase],
  templateUrl: './component.html',
  styleUrl: './component.css'
})
export class Components {

}
