import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:User=new User('','',0,'');
  users:User[] = [];
  message:string="";

  constructor(private userService:UserService,private router:Router)
  {
    this.message="Register Successfully...please login now...";

  }

  

  saveToDB()
  {
    this.userService.saveToDB(this.user).subscribe(); // subscribe() is must .
  }


}
