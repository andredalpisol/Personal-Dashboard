import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NoteService } from '../../shared/note.service';
import { Note } from '../../shared/notes.model';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  note!: Note;
  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam: any = paramMap.get('id')
      this.note = this.noteService.getNote(idParam)
      console.log(this.note.id)
    })
  }
  onFormSubmit(form: NgForm): void {
    this.noteService.updateNote(this.note.id, form.value);
    this.router.navigateByUrl("/notes");

  }
  deleteNote() {
    this.noteService.deleteNote(this.note.id)
    this.router.navigateByUrl("/notes");

  }
}