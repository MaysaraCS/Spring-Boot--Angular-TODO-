import { Component, OnInit } from '@angular/core';
import { Todo } from '../../app/models/Todo';
import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { TodoDataService } from '../../app/service/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  imports: [NgFor, DatePipe, UpperCasePipe, NgFor, NgIf],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit{

  // todos = [
  //   new Todo(1, 'Learn Frontend', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit spain', false, new Date())
  // ]

  todos: Todo[] = [];
  message: string = '';

  constructor(private todoService:TodoDataService,
    private router:Router
  ) { }
  ngOnInit(){
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('maysara').subscribe(
        response =>{
          console.log(response);
          this.todos = response;
        }
      );
  }

  deleteTodo(id:number){
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('maysara', id).subscribe(
      response =>{
        console.log(response);
        this.message = `Delete of todo ${id} successful`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id: number) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
