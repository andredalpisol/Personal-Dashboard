import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../shared/notes.model';
import { NoteService } from '../../shared/note.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss'],
})
export class AddNotesComponent implements OnInit {
  note!: Note;
  constructor(
    private noteService: NoteService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  submittry: boolean = false;
  onFormSubmit(form: NgForm): void {
    if (form.invalid) {
      this.submittry = true;
      return;
    }
    this.note = new Note(form.value.title, form.value.content);
    this.noteService.addNote(this.note)
    this.submittry = false;
    this.router.navigateByUrl('/notes');
  }
}
