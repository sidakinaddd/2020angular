import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input()
  number1: number;
  @Input()
  expression:string;
  constructor() { }

  ngOnInit(): void {
  }

}
