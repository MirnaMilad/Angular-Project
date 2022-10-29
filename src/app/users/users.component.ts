import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[]
  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res:User[]) => {
        this.users = res
        console.log(this.users)
      },
      error:(error) => {
        console.log(error)
      }
    }
    )
  }

  deleteUser(userId:number){
    return this.userService.deleteUser(userId).subscribe({
      next:(res)=>{
        console.log(res);
        this.users=this.users.filter((user)=>{
          if(userId !=user.id){
            return user
          }
        })
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
