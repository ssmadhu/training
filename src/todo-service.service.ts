import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  getTodos(): Array<any> {
    return   [{
      id: 1,
      item: "Learn Angular",
      completed: false
    }, {
      id: 2,
      item: "Master Angular",
      completed: false
    }]
  }
}
