import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlineExamPortal';

  imagepath:string="assets/images/onlineExam.jpg";
  imgstulogin:string="assets/images/studentLogin.jpg";
  imgadlogin:string="assets/images/adminLogin.jpg";
  imgregister:string="assets/images/register.jpg";
}
