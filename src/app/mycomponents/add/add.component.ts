import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  title! : string;
  desc! : string;

  isValid : boolean = true;

  onSubmit(isvalid : any)
  {
    if(isvalid == false)
    {
      this.isValid = false;
      return;
    }  
    this.isValid = true;

    if(this.desc == "")
      this.desc = "No Description"
    console.log("Added event", );
    this.todoAdd.emit(new Todo(this.title,this.desc));

    this.title="";
    this.desc = "";

  }

}
