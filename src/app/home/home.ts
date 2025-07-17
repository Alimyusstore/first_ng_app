import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 users = [
  {
    id: 1,
    name: 'Alim',
    age: 28
  },
  {
    id: 2,
    name: 'Yusuf',
    age: 25
  },
  {
    id: 3,
    name: 'Ajibola',
    age: 27
  },
  {
    id: 4,
    name: 'Tajudeen',
    age: 26
  },
  {
    id: 5,
    name: 'Osude',
    age: 29
  },

 ]

 constructor(private route:Router){}

 goToProfile(){
this.route.navigate(['profile'], {queryParams:{country:"Nigeria"}})
 }
}
