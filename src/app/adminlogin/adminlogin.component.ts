import { Component } from '@angular/core';
import { Admin, AdminService } from '../admin.service';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
 
  admin:Admin=new Admin('','');

  message:string="";
  user:User=new User('','',0,'');
  imgusername:string="assets/images/username.jpg";
  imgpassword:string="assets/images/password.jpg";
  imglogin:string="assets/images/loginPageA.jpg";


  constructor(private userService:UserService,private router:Router, private adminService:AdminService){

  }

  validate2(){

    this.admin.username=this.user.username;
    this.admin.password=this.user.password;
    this.adminService.validate2(this.admin).subscribe(answer=>{
      
      if(answer){
                        
          this.router.navigate(['admindashboard']);
  
        }
  
      else{
        this.message="invalid credentials, please try again";
       // this.router.navigate(['adminlogin']);
      }   
    
  });
  
}
}
