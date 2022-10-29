import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './cards/card/card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SliderComponent } from './slider/slider.component';
import { TestComponent } from './test/test.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HighLightDirective } from './shared/directives/high-light.directive';
import { ScaleDirective } from './shared/directives/scale.directive';
import { CardsComponent } from './cards/cards.component';
import { InputsComponent } from './form/inputs/inputs.component';
import { TableComponent } from './form/table/table.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersService } from './services/users.service';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    NavBarComponent,
    SliderComponent,
    TestComponent,
    TodoListComponent,
    GalleryComponent,
    HighLightDirective,
    ScaleDirective,
    CardsComponent,
    InputsComponent,
    TableComponent,
    LoginFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsersComponent,
    UsersFormComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
