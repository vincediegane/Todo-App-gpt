import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todos = [
    { title: 'todo 1', done: true },
    { title: 'todo 2', done: false },
    { title: 'todo 3', done: true },
  ]
}
