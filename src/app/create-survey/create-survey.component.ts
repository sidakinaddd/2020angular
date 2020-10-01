import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray,Validators} from '@angular/forms';
import {Survey, Question, Option} from '../models/models';
export interface QuestionType{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})

export class CreateSurveyComponent implements OnInit {
  surveyForm:FormGroup;
  selectedOption = [];
  editMode = false;
  
  questions : QuestionType[]=[
    { value: 'Single choice', viewValue: 'Single choice' },
    { value: 'Multi choice', viewValue: 'Multi choice' },
    { value: 'Text', viewValue: 'Text' },
    { value: 'Rating', viewValue: 'Rating' }
  ]

  constructor() { }

  ngOnInit() {
    this.initForm();
    
  }
  private initForm(){
    let surveyTitle = '';
    let surveyQuestions = new FormArray([]);
    this.surveyForm = new FormGroup({
      'surveyTitle':new FormControl(surveyTitle,[Validators.required]),
      'surveyQuestions': surveyQuestions,
    });
    this.onAddQuestion();
  }
  onAddQuestion(){
    console.log(this.surveyForm);
    const surveyQuestionItem = new FormGroup({
      'questionTitle': new FormControl('', Validators.required),
      'questionType': new FormControl('', Validators.required),
      'questionAnswer':new FormControl(''),
      'questionGroup': new FormGroup({})
    });
    (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);
  }
  onRemoveQuestion(index) {

  
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
    this.selectedOption.splice(index,1)
    console.log(this.surveyForm);

  }

  onSeletQuestionType(questionType, index) {
    if (questionType === 'Single choice' || questionType === 'Multi choice') {
      this.addOptionControls(questionType, index)
    }
  }
  addOptionControls(questionType, index) {

    let options = new FormArray([]);
    let showRemarksBox = new FormControl(false);


    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);
    (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

    this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

    this.addOption(index);
    this.addOption(index);
  }
  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }


  addOption(index) {
    const optionGroup = new FormGroup({
      'optionText': new FormControl('', Validators.required),
    });
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
  }
  postSurvey() {

    let formData = this.surveyForm.value;
    console.log(formData);

    console.log();
    let ID = 0;
    let Title = formData.surveyTitle;
    let IsDeleted = false;
    //  let Question: Question[] = [];
    let Questions = [];

    let surveyQuestions = formData.surveyQuestions;
    let optionArray = formData.surveyQuestions[0].questionGroup.options[0].optionText
    let survey = new Survey(ID, Title, IsDeleted,  Questions);


    surveyQuestions.forEach((question, index, array) => {


      let questionItem = {
        'ID': 0,
        "Type": question.questionType,
        "Text": question.questionTitle,
        "options": [],
        "Required": false,
        "Remarks": "",
        "hasRemarks": false,
        "isAnswer":question.questionAnswer,

      }
      if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
        questionItem.hasRemarks = question.questionGroup.showRemarksBox;
      }


      if (question.questionGroup.hasOwnProperty('options')) {



        question.questionGroup.options.forEach(option => {
          let optionItem: Option = {
            "ID": 0,
            "OptionText": option.optionText,
            "OptionColor": "",
            "hasRemarks": false,


          }
          questionItem.options.push(optionItem)
        });
      }

 
      survey.Question.push(questionItem)


    });


  }
  onSubmit() {

    this.postSurvey();

  }


}
