import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-app';
  todos = [
    { title: 'todo 1', done: true },
    { title: 'todo 2', done: false },
    { title: 'todo 3', done: true },
  ]
  newTodo: any;

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {}

  removeTodo(todo: any) {}
}
