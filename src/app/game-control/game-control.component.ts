import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  constructor() { }
@Output()  intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  // numberEmit;
  // setNumber = 0;
  // @Output() countEmit = new EventEmitter() ;
  ngOnInit() {
  }

  stratGame() {

    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    },1000);


    // let setNumber = 0;
    // setInterval(function(){
    //   this.setNumber +=1;
    //   console.log('setNumber',this.setNumber);
    //   console.log('called',this.setNumber % 2);

    //   if (this.setNumber % 2 ==0) {
    //     console.log('even');
    //     this.countEmit.emit({
    //       count : this.setNumber
    //     })
        
    //   }
      
    //   // this.numberEmit = setNumber;
    //   // console.log(setNumber);
    // //  }, 1000 );
     
  }
  
  

}