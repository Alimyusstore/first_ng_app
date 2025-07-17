import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName: string | null = '';
  userCountry: string | null = '';
  userAge: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.userName = this.route.snapshot.paramMap.get('name');
    this.route.queryParams.subscribe(param =>{
      this.userCountry = param['country'];

      
    })
    this.route.data.subscribe(data=>{
      this.userAge = data["age"]
    })
  }
}
