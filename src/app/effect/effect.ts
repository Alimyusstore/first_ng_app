import { Component, signal, effect, WritableSignal } from '@angular/core';

@Component({
  selector: 'effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css'
})
export class Effect {
userName = signal('Ajibola');
count : WritableSignal<number>= signal(0);
displayHeading = false;

handleUser(){
  this.userName.set("Alim")
}
handleCount(){
  this.count.set(this.count()+1 )
}
constructor(){
  effect(()=>{
     if (this.count() == 3){
      this.displayHeading = true
     }

     setTimeout(()=>{
      this.displayHeading = false
     }, 2000)
  })
}
}
