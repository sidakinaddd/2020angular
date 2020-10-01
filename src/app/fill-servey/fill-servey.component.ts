import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-servey',
  templateUrl: './fill-servey.component.html',
  styleUrls: ['./fill-servey.component.scss']
})
export class FillServeyComponent implements OnInit {
  form: any;

  constructor() { }

  ngOnInit(): void {
    this.form=JSON.parse(localStorage.getItem('formData')) 
    console.log(this.form);
    console.log(this.form.surveyQuestions[0].questionGroup.options[0].optionText)
  }

}
