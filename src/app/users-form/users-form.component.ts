import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

 
userId:number
  constructor(private userService : UsersService,
    private router : Router,
    private activatedRoute:ActivatedRoute) { 
      this.userId = this.activatedRoute.snapshot.params['id']
    }

  ngOnInit(): void {
  }

  userForm:FormGroup = new FormGroup({
    'name' : new FormControl(null , [Validators.required , Validators.pattern("[a-zA-Z]+")]),
    'email': new FormControl(null , [Validators.required , Validators.email])
  })




onSubmit(){
  if(!this.userId){
    this.userService.addUser(this.userForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['/users'])
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }else{
 this.userService.editUser(this.userId , this.userForm.value).subscribe({
  next:(res)=>{
    console.log(res)
    this.router.navigate(['/users'])
  },
  error:(error)=>{
    console.log(error)
  }
 }
 )
}

  
}
}
