import { Component } from '@angular/core';

@Component({
  selector: 'gets',
  imports: [],
  templateUrl: './get.html',
  styleUrl: './get.css'
})
export class Get {
 username: string = '';

 getUsername(event: Event){
  this.username = (event.target as HTMLInputElement).value
 }

 setUsername(){
  this.username = 'Ajibola'
 }

 getUserNameWithTemplate(val:string){
  this.username=val
 }
}
