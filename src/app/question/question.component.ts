import { Component, OnInit } from '@angular/core';
import { Answer, Question, QuestionService } from '../question.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{

     message:any='';
     subject:any=''; 
     question:Question=new Question(0,'','','','','','','');
     submittedAnswer:string='';  
     answer:Answer=new Answer(0,'','','');
     duration:any=81;
     durationMessage='';
     durationInterval:any='';
     selected:boolean=false;

     allAnswers:Answer[]=[];

     allQnos:number[]=[];

     maxtime:any='';   // for managing max time 10 seconds for each question
     x:any=''; // it will refer interval used for above maxtime

     constructor(private questionService:QuestionService,private router:Router){
      
      this.message=sessionStorage.getItem("message");
      this.subject = sessionStorage.getItem("subject");
      questionService.getFirstQuestion(this.subject).subscribe(question=>this.question=question);

      

      this.durationInterval = setInterval(()=>{

       this.duration=this.duration-1;

       var minutes=Math.floor(this.duration/60); // floor function returns : 2.224==>2

       var seconds=this.duration%60;

       this.durationMessage= "Time Remaining is "+minutes + ":" + seconds+ " Seconds";

       if(this.duration==0)
        this.endExam();

      },1000); // after 1 sec setInterval will execute given arrow function
     }

  ngOnInit(): void {

    this.decreaseTime();
    this.questionService.getAllQno(this.subject).subscribe(array=>this.allQnos=array);

  }

  decreaseTime(){

    this.maxtime=10;

    this.x=setInterval(()=>{

      this.maxtime--;
      console.log(this.maxtime);
      if(this.maxtime==0){
        this.nextQuestion();
      }
    },1000);
  }


     nextQuestion(){

      clearInterval(this.x); //stop previous interval
      this.decreaseTime();  // start new interval for new question

      this.selected=false;
      this.questionService.nextQuestion().subscribe(question=>this.question=question);

     }

    previousQuestion(){

      clearInterval(this.x); //stop previous interval
      this.decreaseTime();  // start new interval for new question
      
      this.selected=false;

      this.questionService.allAnswers().subscribe(allAnswers=>this.allAnswers=allAnswers);

      this.questionService.previousQuestion().subscribe(question=>this.question=question);
    }

    getColor(option:string){

      for(var i=0;i<this.allAnswers.length;i++){

        let answer= this.allAnswers[i];
        if(answer.qno==this.question.qno && answer.submittedAnswer==option){

          return "green";
        }
        
      }
      return "red";

    }

    isChecked(option:string){

      for(var i=0;i<this.allAnswers.length;i++){

        let answer= this.allAnswers[i];

        if(answer.qno==this.question.qno && answer.submittedAnswer==option){

          return true;
        }
        
      }
      return false;

    }


    saveAnswer(){
      this.answer.submittedAnswer=this.submittedAnswer;
      this.answer.qno=this.question.qno;
      this.answer.qtext=this.question.qtext;
      this.answer.correctAnswer=this.question.answer;

      this.questionService.saveAnswer(this.answer).subscribe();
    }

    endExam(){

      clearInterval(this.durationInterval);
      this.router.navigateByUrl("score");
    }

    getQuestion(eventobject:any){


      let questionNumber=eventobject.target.value; // target will give sourse of event

      console.log("selected question number is "+questionNumber);

      this.questionService.getQuestion(questionNumber).subscribe(question=>this.question=question);
    }
}
