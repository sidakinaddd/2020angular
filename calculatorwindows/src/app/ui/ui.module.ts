import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { DisplayComponent } from './display/display.component';
import { CalculateService } from './services/calculate.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CalculatorComponent, KeyboardComponent, DisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent
  ],
  providers:[
    CalculateService
  ]
})
export class UiModule { }
