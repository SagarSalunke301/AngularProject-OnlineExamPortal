import { Component } from '@angular/core';
import { AdminService, Result } from '../admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manageresult',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './manageresult.component.html',
  styleUrl: './manageresult.component.css'
})
export class ManageresultComponent {
  results:Result[]=[];
  subject:string="";
  pages:number[]=[];
  no:number=0;

  show:boolean=false;
  
  constructor(private adminService:AdminService)
  {

  }
  showRecords()
  {
    this.adminService.getResults2(this.subject,1).subscribe(array=>{this.results=array;console.log("called")});

    this.pages.length=0;

    console.log('subject is'+this.subject);

    this.adminService.getRecordsCounts(this.subject).subscribe(noofrecords => {

      let pageno=1;

      while(3*pageno<noofrecords)
        {
          this.pages.push(pageno);
          pageno=pageno+1;
        }

        this.pages.push(pageno);

        console.log("Total pages"+pageno);
    })
     
  }

// 3 records
// 11 records


getResults2(pageno:number)
{
  this.adminService.getResults2(this.subject,pageno).subscribe(array=>this.results=array);
}



}