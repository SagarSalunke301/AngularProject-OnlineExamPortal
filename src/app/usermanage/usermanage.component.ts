import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usermanage',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usermanage.component.html',
  styleUrl: './usermanage.component.css'
})
export class UsermanageComponent implements OnInit {

  user:User=new User('','',0,'');
  users:User[] = [];

  constructor(private userService:UserService)
  {
    
  }


  ngOnInit(): void 
  {
    this.getAllUsers();
  }
  updateUser()
  {
    this.userService.updateUser(this.user).subscribe(); 
  }

  deleteUser()
  {
    this.userService.deleteUser(this.user.username).subscribe();
  }

  getUser()
  {

    this.userService.getUser(this.user.username).subscribe(userobject=>this.user=userobject);
       

  }

  getAllUsers()
  {
   this.userService.getAllUsers().subscribe(array=>this.users=array);
  
  }



}
