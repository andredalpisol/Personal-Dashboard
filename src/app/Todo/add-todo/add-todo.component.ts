import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todo!: Todo;
  constructor(private TodoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  submittry: boolean = false;
  onFormSubmit(form: NgForm): void {
    if (form.invalid) {
      this.submittry = true
      return
    }
    this.todo = new Todo(form.value.text);
    this.TodoService.addTodo(this.todo)
    this.submittry = false
    this.router.navigateByUrl("/todo")
  }
}
