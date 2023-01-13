import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input()
  todoele!: Todo;

  
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  // @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  // @Output() todoEdit: EventEmitter<Todo> = new EventEmitter();

  isdesc : boolean = false;
  isedit : boolean = false;

  onCheckbox()
  {
    console.log("printing todo element", this.todoele)
    //This proves that dual binding is working perfectly fine
  }

  onSubmitEdit()
  {
    // this.todoEdit.emit(this.todoele);
    //No need to emmit here as the todo element is getting eddited inplace
    console.log("Edit submitted,  new todo item -> ", this.todoele)
    this.isedit = false;
  }

  onClickDesc()
  {
    this.isdesc = !this.isdesc;
  }

  onDelete()
  {
    this.todoDelete.emit(this.todoele);
    console.log("Element Deleted",this.todoele);
  }

  onEdit()
  {
    this.isedit = true;
    console.log("Editing item", this.isedit)
  }

  constructor()
  {
    console.log(this.todoele)
  }



}
