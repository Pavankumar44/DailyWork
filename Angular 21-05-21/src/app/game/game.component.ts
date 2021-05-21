import { Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() evenNumberEvent = new EventEmitter<{num:number}>();
  @Output() oddNumberEvent = new EventEmitter<{num:number}>();
  n: number= 0;
  timer: any;

  start(){
    this.timer = setInterval(()=>{
      this.n=this.n+1;
      if(this.n%2 == 0){
        this.evenNumberEvent.emit({
          num: this.n
        })
      }
      else{
        this.oddNumberEvent.emit({
          num: this.n
        })
      }

    },
    1000);
  }
   stop(){
     clearInterval(this.timer);
   }

   onOddNumber(oddNumber: number){
     console.log("odd number" + oddNumber);
   }

  
}
