import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notesList: any;
  subjectName: any;

  constructor(private studentService: StudentService, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.subjectName = this.route.snapshot.paramMap.get('subject');
    });

    this.studentService.fetchNotesList({ 'subject': this.subjectName }).subscribe((notes) => {
      this.notesList = notes.data
      console.log(this.notesList)
    });
  }
}
