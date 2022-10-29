import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http : HttpClient) { }

  getAllUsers(){
    return this.http.get(environment.baseUrl+'/users')
  }

  getUserById(userId : any){
    return this.http.get(environment.baseUrl+'/users/' + userId)
  }

  addUser(user : any){
    return this.http.post(environment.baseUrl+'/users' , user)
  }

  editUser(userId :any , user : any){
    return this.http.put(environment.baseUrl+'/users/' + userId , user)
  }

  deleteUser(userId : any){
    return this.http.delete(environment.baseUrl+'/users/' + userId)
  }
}
