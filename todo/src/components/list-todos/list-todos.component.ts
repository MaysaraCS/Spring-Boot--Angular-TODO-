import { Component, OnInit } from '@angular/core';
import { Todo } from '../../app/models/Todo';
import { DatePipe, NgFor, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  imports: [NgFor, DatePipe, UpperCasePipe, NgFor],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{

  todos = [
    new Todo(1, 'Learn Frontend', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit spain', false, new Date())
  ]

  constructor() { }
  ngOnInit(){
      
  }
}
