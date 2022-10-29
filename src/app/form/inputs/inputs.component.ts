import { Router } from '@angular/router';
import { Student } from './../../models/student';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  student:Student;
  form:FormGroup
  id:number =0
  @Output() studentsInputs:EventEmitter<Student> = new EventEmitter();

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name' : new FormControl(null , [Validators.required , Validators.pattern("[a-zA-Z]+")]),
      'age': new FormControl(null, [Validators.required , Validators.min(18)])
    })
  }
  
  get formControl() {
    return this.form.controls;
  }
  get getUserName(){
    return this.form.controls['name']
  }
  get getUserAge(){
    return this.form.controls['age']
  }



  hasError(errorMsg:any , control : string){
    if(this.getUserName.errors && control === "name"){
      return Object.keys(this.getUserName.errors).includes(errorMsg)
    }
    else if(this.getUserAge.errors && control === "age"){
      return Object.keys(this.getUserAge.errors).includes(errorMsg)
    }
    else{
      return false
    }
  }

onSubmit(name : string, age :number){
  // if(name=='' || age==0 || name.length>5 || age<18 || Number(age) == NaN){
  //   return null
  // }else{
    this.id=this.id+1;

    const id=this.id;

    this.student={ id , name , age};

    this.studentsInputs.emit(this.student)
    
    // if(Number(age) == NaN){
    //   console.log('successful')
    // }else{
    //   console.log('Error')
    //   console.log(Number(age))
    //   console.log(typeof(Number(age)))
    // }
  // }
}


}