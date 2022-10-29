import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public items: string[] = [];
  public newTask = '';
  public addToList() {
    if (this.newTask == '') {
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }
  public deleteTask(index: number) {
    this.items.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
