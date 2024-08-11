import { Component } from '@angular/core';
import { Answer, QuestionService } from '../question.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

   score:any=0;
   allAnswers:Answer[]=[];

   constructor(private questionService:QuestionService){
     this.score=questionService.calculateScore().subscribe(score=>this.score=score);
     questionService.allAnswers().subscribe(allAnswers=>this.allAnswers=allAnswers);
    
    }

    compare(submittedAnswer:string,correctAnswer:string){
      if(submittedAnswer==correctAnswer)
        return "lightgreen";
      else
        return "firebrick";
      
    }

}
