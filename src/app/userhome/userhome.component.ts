import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TodoListService } from '../service/ToDoListService';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserHomeComponent implements OnInit { 

  name: string;
  newTodo: string;
  todos: any;
  todoObj: any;

  constructor(private router: Router,
    private toDoService:TodoListService) { 
     
  }

  ngOnInit() {
    //name for title
    if(history.state)
      this.name=history.state.user;
    //logout for direct page access
    if(this.name==undefined)
      this.logout();
    this.newTodo='';
    this.todos = TodoListService.getToDoList(this.name);
  }

  /**
   * add a new to-do to the todos array
   * @param event 
   */
  addTodo(event) {
    this.todos.push(this.newTodo);
    this.newTodo='';
    event.preventDefault();
  }

  /**
   * Delete the selected todo
   * @param index 
   */
  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  /**
   * Delete all todos
   */
  deleteAllTodos() {
    this.todos=[];
  }

  /**
   * clear the user detail and redirect to home page
   */
  logout(){
    this.name=undefined;
    this.router.navigate(['login']);
  }
}
