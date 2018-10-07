import { Component, OnInit } from '@angular/core';
import { Questions } from '../questions';
import { QUESTIONS } from '../mock-questions';

@Component({
  selector: 'app-howdy',
  templateUrl: './howdy.component.html',
  styleUrls: ['./howdy.component.css']
})

export class HowdyComponent implements OnInit {

  answers : string[];
  answer: string;
  message: string;
  questions = QUESTIONS;
  question: Questions;

  constructor() { }

  ngOnInit() {
     this.question = this.randomQuestion();
     this.answers = [];
  }

  randomQuestion(): Questions {
       let index =  Math.floor((Math.random() * this.questions.length-1) );
       this.question = this.questions[index];
       return this.questions[index];
  }

  addAnswer(answer: string): void {
     this.answers.push(answer);
     
     switch (this.question.id) {
      case 13: 
      this.message = ` Hey you really think ${this.answer} about programming `;
      break;    
      case 14:  
      this.message = ` You really do ${this.answer} Britney!!! `;
      break
      case 15: 
       if(this.answer === 'cake'){
        this.message = ` You really are such a  ${this.answer} person`;
      
       }else{
        this.message = ` You really are such a  ${this.answer} person `;
       }
      
      break;
      case 16:
        this.message = ` Hey you really like ${this.answer}`;
        break;
      case 17:
        this.message = ` Are you sure the weather is ${this.answer}. I checked the forecast they said something else!!!`;
          break;
      default: 
        this.message = " Dude I am happy about that!!!" 
           break;
    }
    this.randomQuestion();
    this.answer = "";

  
    
  }

}
