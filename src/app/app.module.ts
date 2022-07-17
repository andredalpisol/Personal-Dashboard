import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './Bookmark/bookmarks/bookmarks.component';
import { TodosComponent } from './Todo/todos/todos.component';
import { NotesComponent } from './Note/notes/notes.component';
import { BookmarkTileComponent } from './Bookmark/bookmark-tile/bookmark-tile.component';
import { AddNotesComponent } from './Note/add-notes/add-notes.component';
import { v4 as uuidv4 } from 'uuid';
import { NoteCardComponent } from './Note/note-card/note-card.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditNoteComponent } from './Note/edit-note/edit-note.component';
import { TodoItemComponent } from './Todo/todo-item/todo-item.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { TodoEditComponent } from './Todo/todo-edit/todo-edit.component';
import { BookmarkManageComponent } from './Bookmark/bookmark-manage/bookmark-manage.component';
import { BookmarkEditComponent } from './Bookmark/bookmark-edit/bookmark-edit.component';
import { BookmarkAddComponent } from './Bookmark/bookmark-add/bookmark-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNotesComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    TodoEditComponent,
    BookmarkManageComponent,
    BookmarkEditComponent,
    BookmarkAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
