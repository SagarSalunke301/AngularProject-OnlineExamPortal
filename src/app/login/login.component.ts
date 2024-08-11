import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../user.service';
import { Router } from '@angular/router';
import { Answer, QuestionService } from '../question.service';
import { Admin, AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  subjects:string[]=[];

  subject:string='';

  user:User=new User('','',0,'');

  admin:Admin=new Admin('','');

  message:string="";

  imglogin:string="assets/images/loginPageA.jpg";
  imgusername:string="assets/images/username.jpg";
  imgpassword:string="assets/images/password.jpg";



  constructor(private userService:UserService,private router:Router, private questionService:QuestionService, private adminService:AdminService){

  }
  ngOnInit(): void {
    
    this.questionService.getAllSubjects().subscribe(array=>this.subjects=array);
  }

  validate(){
      this.userService.validate(this.user).subscribe(response=>{
        
        if(response){
                          
            sessionStorage.setItem("message","Welcome " + this.user.username);
            
            sessionStorage.setItem("subject",this.subject);

            sessionStorage.setItem("duration", "81");

            this.router.navigateByUrl("question");

          }

        else{
          this.message="invalid credentials, please try again";
          //this.router.navigateByUrl("login");
        }


        });
  
}

}
