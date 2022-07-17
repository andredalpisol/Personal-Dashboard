import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './Note/add-notes/add-notes.component';
import { BookmarksComponent } from './Bookmark/bookmarks/bookmarks.component';
import { NotesComponent } from './Note/notes/notes.component';
import { TodosComponent } from './Todo/todos/todos.component';
import { EditNoteComponent } from './Note/edit-note/edit-note.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { TodoEditComponent } from './Todo/todo-edit/todo-edit.component';
import { BookmarkAddComponent } from './Bookmark/bookmark-add/bookmark-add.component';
import { BookmarkManageComponent } from './Bookmark/bookmark-manage/bookmark-manage.component';
import { BookmarkEditComponent } from './Bookmark/bookmark-edit/bookmark-edit.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'todo/add', component: AddTodoComponent },
  { path: 'todo/:id', component: TodoEditComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: AddNotesComponent },
  { path: 'notes/:id', component: EditNoteComponent },
  { path: 'bookmarks/add', component: BookmarkAddComponent },
  {
    path: 'bookmarks/manage', component: BookmarkManageComponent, children: [
      { path: ':id', component: BookmarkEditComponent }]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
