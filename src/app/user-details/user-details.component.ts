import { User } from './../models/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
userId:number
user:User;
  constructor(private usersService:UsersService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.usersService.getUserById(this.userId).subscribe({
      next:(res:User)=>{
        this.user=res
        console.log(this.user)
      },
      error:(error)=>{
        console.log(error)
  
      }
    })
  }

  
}
