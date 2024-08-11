
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { 

  }
  saveToDB(user:User) 
  {
    return this.httpclient.post("http://localhost:8080/saveToDB",user);
  }

  updateUser(user:User) 
  {
    return this.httpclient.put("http://localhost:8080/updateUser",user);
  }


  getUser(username:string)
  {
     return this.httpclient.get<User>("http://localhost:8080/getUser/" + username);
  

   }

   deleteUser(username:string)
   {
      return this.httpclient.delete("http://localhost:8080/deleteUser/" + username);
   } 

   getAllUsers()
  {
    return this.httpclient.get<User[]>("http://localhost:8080/getAllUsers");
  }

  validate(user:User)
  {
    return this.httpclient.post<boolean>("http://localhost:8080/validate",user);

  }

}

// variable names from User class in Angular and Java must be same .

export class User
{
  username:string;
  password:string;
  mobno:number;
  emailid:string;

  constructor(username:string,password:string,mobno:number,emailid:string)
  {
    this.username=username;
    this.password=password;
    this.emailid=emailid;
    this.mobno=mobno;

  }


}



