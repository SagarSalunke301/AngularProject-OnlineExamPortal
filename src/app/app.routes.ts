import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { RegisterComponent } from './register/register.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { QuestionmanagementComponent } from './questionmanagement/questionmanagement.component';
import { ManageresultComponent } from './manageresult/manageresult.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UsermanageComponent } from './usermanage/usermanage.component';

export const routes: Routes = [

    {path:'register',component:RegisterComponent},

    {path:'login',component:LoginComponent},

    {path:'question',component:QuestionComponent},

    {path:'score',component:ScoreComponent},

    {path:'admindashboard',component:AdmindashboardComponent},

    {path:'questionmanagement',component:QuestionmanagementComponent},

    {path:'manageresult',component:ManageresultComponent},

    {path:'adminlogin', component:AdminloginComponent},

    {path:'usermanage', component:UsermanageComponent}

    //{path:'',redirectTo:'login',pathMatch:'full'},

  

];
