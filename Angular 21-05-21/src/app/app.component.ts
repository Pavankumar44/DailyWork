import { Component } from '@angular/core';
import { STUDENTS } from './student-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-management';
  even: number[] = [];
  odd: number[] = [];

  onEvenNumber(data: {num: number}){
    this.even.push(data.num);
    console.log("even :" + data.num);
  }

  onOddNumber(data: {num: number}) {
    this.odd.push(data.num);
    console.log("odd : " + data.num);
  }

  
}
