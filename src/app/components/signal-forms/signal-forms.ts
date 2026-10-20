import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-signal-forms',
  styleUrl: './signal-forms.css',
  templateUrl: './signal-forms.html',
})
export class SignalForms {
  employeeModel = signal({
    empname: '',
    empcity: '',
    empage: ''
  })
  employeeform = form(this.employeeModel, (schema)=>{
    required(schema.empname, {message:'The field is required'}),
    required(schema.empcity, {message:'The field is required'}),
    required(schema.empage, {message:'The field is required'}),
    minLength(schema.empname, 2,{message:'Minimum 2 characters are needed'}),
    minLength(schema.empcity, 4,{message:'Minimum 4 characters are needed'})

  })

  submit(){
    const formvalue = this.employeeform().value()
  }

}
