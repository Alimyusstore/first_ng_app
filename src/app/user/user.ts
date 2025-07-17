import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  name: string|null ="";
  id : number|null = 0;
 constructor(private route: ActivatedRoute){

 } ngOnInit(){
    this.route.params.subscribe(param=> {console.log(param)
    this.name =param['name']
    this.id =param['id']
  }
    )
 }
}
