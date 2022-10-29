import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormComponent } from './form/form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' , redirectTo:"slider", pathMatch: 'full'},
  {path:'slider' , component:SliderComponent},
  {path:'gallery' , component:GalleryComponent},
  {path:'todolist' , component:TodoListComponent},
  {path:'form' , component:FormComponent},
  {path:'login' , component:LoginFormComponent},
  {path:'users' , component:UsersComponent},
  {path:'users/new' , component:UsersFormComponent},
  {path:'users/:id' , component:UsersFormComponent},
  {path:'users/userDetails/:id' , component:UserDetailsComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
