import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() number: number;
  counter;
  constructor() { }

  ngOnInit() {
  }
  dispalyCounter(count) {
    this.counter = count;
    console.log('count',count)
  }
}