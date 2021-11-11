import { Component } from '@angular/core';
import { TodoServiceService } from 'src/todo-service.service';

class Todo {
  id: number;
  item: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public service: TodoServiceService) {
    this.todos = service.getTodos();
  }
  title = 'Todo Application';
  newItem: string = 'Init';
  item: string = 'Todo';
  canShow: boolean = true;
  todos: Array<Todo>;

  onClick() {
    console.log("Hello")
  }

  onRemove() {
    // this.canShow = false;
    this.item = 'Employee';
  }

  addItem(event) {
    console.log("From parent", event);
    this.todos.push({
      id: this.todos.length+1,
      item: event,
      completed:false
    })
  }

}
