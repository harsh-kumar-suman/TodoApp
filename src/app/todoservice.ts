import { Injectable } from '@angular/core';    
import { Todo } from './Todo';
    
@Injectable({    
  providedIn: 'root'    
})    
export class TodoService {    
    
  todolist : Todo[];

  constructor() { 
    this.todolist = [new Todo("Renew car insurance","Get the car insurance done"), new Todo("Sign up for online course	")];
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

  getTodoList()
  {
    return this.todolist;
  }
}  