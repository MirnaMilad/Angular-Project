import { Student } from './../models/student';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  title = 'first-task-second-day';

  studentsFromParent:Student[] = [];

  addStudentFromInputs(student:Student){
    this.studentsFromParent.push(student)
  }

  
}
