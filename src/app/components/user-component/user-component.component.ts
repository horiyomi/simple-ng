import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  name:string;
  email:string;
  age:number;
  hobbies:string [];
  address:Address;


  constructor() {
    console.log("Constructor ran...")
   }

  ngOnInit() {
    this.name = "Dammy";
    this.email = "mail@mail.com",
    this.age = 22,
    this.hobbies = ["Coding","Listening","Playing Video Game"],
    this.address = {
      state: "Lagos",
      city:"Epe",
      street:"Ora Estate"
    }
  }

  addHobby(hobby){
    // console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  removeHobby(hobby){
    for(let i=0; i < this.hobbies.length; i++){ 
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address{
    state,
    city,
    street
}