import {Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'name' : new FormControl(null , [Validators.required , Validators.pattern("[a-zA-Z]+")]),
      'phone': new FormControl(null, [Validators.required, Validators.pattern("01[0-9]{9}")]),
      'email': new FormControl(null , [Validators.required , Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl(null , [Validators.required])
    })
    
  }
  
  get formControl() {
    return this.loginForm.controls;
  }
  get getUserName(){
    return this.loginForm.controls['name']
  }
  get getPhone(){
    return this.loginForm.controls['phone']
  }
  get getEmail(){
    return this.loginForm.controls['email']
  }

  hasError(errorMsg:any , control : string){
    if(this.getUserName.errors && control === "name"){
      return Object.keys(this.getUserName.errors).includes(errorMsg)
    }
    else if(this.getPhone.errors && control === "phone"){
      return Object.keys(this.getPhone.errors).includes(errorMsg)
    }
    else if(this.getEmail.errors && control === "email"){
      return Object.keys(this.getEmail.errors).includes(errorMsg)
    }
    else{
      return false
    }
  }


  onSubmit() {
   
    if (this.loginForm.invalid) {
      return
    }
    else(
      this.router.navigate(['/slider'])
    )
    
  }
}
