import { Component } from '@angular/core';

@Component({
  selector: 'counters',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
 counter : number = 0
 increment(){
  this.counter++
 }
 decrement(){
  if(this.counter >0){
    this.counter--
  }
 }
 reset(){
  this.counter = 0
 }

 handleCounter(val:string){
  if(val == "minus"){
    this.decrement()
  }else if (val == "plus"){
    this.increment()
  }else{
    this.reset()
  }
 }
}
