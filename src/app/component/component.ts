import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { Button } from '../button/button';
import { Counter } from '../counter/counter';
import { Get } from '../get/get';
import { Ifelse } from '../ifelse/ifelse';
import { Switchcase } from '../switchcase/switchcase';
import { Forloop } from '../forloop/forloop';
import { Signals } from '../signal/signal';
import { Effect } from '../effect/effect';
import { TwoWayBinding } from '../two-way-binding/two-way-binding';
import { ToDo } from '../to-do/to-do';
import { DynamicStyling } from '../dynamic-styling/dynamic-styling';
import { Directives } from '../directives/directives';
import { Forms } from '../forms/forms';

@Component({
  selector: 'component',
  imports: [Login, Signup, Button, Counter, Get, Ifelse, Switchcase, Forloop, Signals, Effect,TwoWayBinding, ToDo , DynamicStyling, Directives, Forms],
  templateUrl: './component.html',
  styleUrl: './component.css'
})
export class Components {

}
