import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from 'src/app/todoservice';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  todolist! : Todo[];
  constructor(private todoservice: TodoService){ } 
  
  ngOnInit()
  {
    this.todolist = this.todoservice.getTodoList();
  }

  deleteTodo(todoele:Todo){
    console.log(todoele);
    const index = this.todolist.indexOf(todoele);
    this.todolist.splice(index, 1);
  }

  addTodo(todoele : Todo)
  {
    console.log(todoele);
    this.todolist.push(todoele);
  }

}
