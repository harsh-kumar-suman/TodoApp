export class Todo
{
    title : string;
    completed : boolean;
    desc : string;
    
    constructor(title : string,  desc : string = "No Description",completed : boolean = false)
    {
        this.title = title;
        this.completed = completed;
        this.desc = desc;
    }
}