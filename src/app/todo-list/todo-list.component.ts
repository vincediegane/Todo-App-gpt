import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo: any;
  @Input()
  todos!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {}

  removeTodo(todo: any) {}

}
