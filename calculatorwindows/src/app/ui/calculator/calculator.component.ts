import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstLabelText:string;
  secondLabelText:string;
  buttonClicked:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
    
  }
  

}
