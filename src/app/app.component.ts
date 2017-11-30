import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  todoList = [
    {task:'Task 1', done:false}, 
    {task:'Task 2', done:false} 
  ];

  task:string;
  status:string;

  constructor() { }

  addTask() {
    this.todoList.push({ task: this.task,  done: false });
    this.task = "";
  };

  deleteTask(i) {
    this.todoList.splice(i, 1);
  }

}
