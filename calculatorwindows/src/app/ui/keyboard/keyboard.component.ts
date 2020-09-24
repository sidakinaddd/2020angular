import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  result: string='0';
  firstNumber: number;
  secondNumber:number;
  operation:string;
  expression:string=""
  operationClick=false;
  resultClicked = false;
  pointClick= false;
  equalClick=false;
  secondaryOperationClick=false;
  againoperation:boolean=false;
  percentClick:boolean=false;
  memory:number[]=[];
  constructor() { }
  ngOnInit(): void {
  }
  numberClicked(n?){
    if(this.secondaryOperationClick===true){
      this.result="";
      this.secondaryOperationClick=false;
      this.expression="";
    }
    if(this.equalClick===true && this.operationClick===true){
      this.result="";
    }
    else if(this.operationClick===true && this.equalClick===false){
      this.firstNumber=parseFloat(this.result);
      this.expression+=this.firstNumber+this.operation;
      this.result="";
      this.operationClick=false;
      this.pointClick=false;
    }
    else if(this.equalClick===true && this.operationClick===false){
      this.expression="";
      this.result="";
      this.equalClick=false;
    
    }
    
    if(this.result==="0"){
      this.result=n;
    }
    else if(this.result==="0" && n==="0"){
      
    }else{
      this.result+=n;
    }
    
    
  } 
  equalClicked(e?){
    if(this.equalClick===true && this.operationClick===true){
      this.secondNumber=parseFloat(this.result);
      this.expression=this.firstNumber+this.operation+this.secondNumber;
      if(this.operation==="+"){
        this.result=(this.firstNumber+this.secondNumber).toString();
      }else if(this.operation==="-"){
        this.result=(this.firstNumber-this.secondNumber).toString();
      }else if(this.operation==="x"){
        this.result=(this.firstNumber*this.secondNumber).toString();
      }else if(this.operation==="/"){
        this.result=(this.firstNumber/this.secondNumber).toString();
      }   
      this.expression+="="+this.result;
    }
    if(this.equalClick===true){
      this.expression=this.result+this.operation+this.secondNumber;
      if(this.operation==="+"){
        this.result=(parseFloat(this.result)+this.secondNumber).toString();
      }else if(this.operation==="-"){
        this.result=(parseFloat(this.result)-this.secondNumber).toString();
      }else if(this.operation==="x"){
        this.result=(parseFloat(this.result)*this.secondNumber).toString();
      }else if(this.operation==="/"){
        this.result=(parseFloat(this.result)/this.secondNumber).toString();
      }     
      this.expression+="="+this.result;
    }else{
        this.secondNumber=parseFloat(this.result);
        if(this.percentClick===true){
          this.secondNumber=(this.secondNumber*this.firstNumber)/100;
          this.calculation(this.operation);
          this.expression+=this.secondNumber+"%="+this.result;
          this.equalClick=true;
          this.percentClick=false;
        }else{
          this.calculation(this.operation);
          this.expression+=this.secondNumber+"="+this.result;
          this.equalClick=true;
        }
        
      
    }
  }
  pointClicked(p?){
    if(this.result.includes('.')){
      this.pointClick=false;
    }else{
      this.pointClick=true;
    }
    if(this.pointClick===true){
      this.result+='.';
    }
  }
  memoryClicked(m?){
    console.log("ok");
  }
  clearClicked(c?){
    if(c==='CE'){
      this.result="";
    }else if(c==='C'){
      this.result="";
      this.expression="";
      this.firstNumber=0;
      this.secondNumber=0;
      this.operationClick=false;
      this.secondaryOperationClick=false;
    }
  }
  backSpaceClicked(b?){
    if(this.result.length===1){
      this.result="0";
    }else{
      this.result=this.result.substring(0,this.result.length-1);
    }
  }
  plusOrMinusClicked(p?){
    this.result=(parseFloat(this.result)*(-1)).toString();
  }
  operationClicked(o?){
    if(this.operationClick===true && this.equalClick==true){
      this.firstNumber=parseFloat(this.result);
    }
    this.operation=o;
    this.operationClick=true;
  }
  secondaryOperationClicked(s?){
    this.operation=s;
    this.firstNumber=parseFloat(this.result)
    if(s==='√‎x'){ 
      this.result=(Math.pow(this.firstNumber,0.5)).toString();
      this.expression=`sqrt(${this.firstNumber})=${this.result}`;
    }else if(s==='x^2'){
      this.result=(Math.pow(this.firstNumber,2)).toString();
      this.expression=`sqr(${this.firstNumber})=${this.result}`;
    }else if(s==='⅟x'){
      this.result=(1/this.firstNumber).toString();
      this.expression=`1/${this.firstNumber}=${this.result}`;
    } 
    this.secondaryOperationClick=true;  
  }
  percentClicked(){
    this.percentClick=true;
  }
  
  calculation(c?){
    if(c === '+'){
      this.result=(this.firstNumber+this.secondNumber).toString();
    }else if(c==="-"){
      this.result=(this.firstNumber-this.secondNumber).toString();
    }else if(c==="x"){
      this.result=(this.firstNumber*this.secondNumber).toString();
    }else if(c==="/"){
      this.result=(this.firstNumber/this.secondNumber).toString();
    }
  }
  
}
