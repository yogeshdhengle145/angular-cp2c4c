import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  test: number;
  // counter;
  // name = 'Angular';
  //  dispalyCounter(count) {
  //   this.counter = count;
  //   console.log('count',count)
  // }

  onEventFired(FiredNumber:number) {
    if (FiredNumber % 2 === 0) {
      this.evenNumbers.push(FiredNumber);
    } else {
      this.oddNumbers.push(FiredNumber);
      this.test = FiredNumber;
    }
    console.log('even',this.evenNumbers);
    console.log('odd',this.oddNumbers);
  }
}
