import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {

  @Input()
  item: string;

  @Output()
  addTodo =  new EventEmitter<string>();

  newItem: string;
  constructor() {
    console.log("Inside Constructor");
  }

  ngOnInit(): void {
    console.log("Inside OnInit");
  }

  ngOnDestroy(): void {
    console.log("Inside OnDestroy");

  }

  add(event) {
    event.preventDefault();
    console.log("Going to add an item to Todo list" , this.newItem);
    this.addTodo.emit(this.newItem);
    this.newItem = '';
  }
}
