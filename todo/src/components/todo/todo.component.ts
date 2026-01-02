import { Component, OnInit } from '@angular/core';
import { Todo } from '../../app/models/Todo';
import { TodoDataService } from '../../app/service/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, DatePipe, NgIf],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  constructor(private todoService: TodoDataService,
    private route:ActivatedRoute,
    private router: Router
  ){}

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, 'maysara', false, new Date());


    if(this.id != -1){
      this.todoService.retrieveTodo('maysara',this.id).subscribe(
        // ASYNC , when the data is available do this
        data => this.todo = data
      )
    }
  }
  saveTodo(){
    if(this.id === -1){
      
      // call create todo 
      this.todoService.createTodo('maysara' ,this.todo).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['todos'])
        } 
      )
    }else{
      
      this.todoService.updateTodo('maysara',this.id ,this.todo).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(['todos'])
        } 
      )
    }
    }
}
