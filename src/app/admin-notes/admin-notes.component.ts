import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin-notes',
  templateUrl: './admin-notes.component.html',
  styleUrls: ['./admin-notes.component.css']
})
export class AdminNotesComponent implements OnInit {
  notesList: any;

  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    this.studentService.fetchAllNotes().subscribe((response) => {
      this.notesList = response.data
      console.log(this.notesList)
    });
  }

  goAddNotes() {
    this.router.navigate(['/addNotes']);
  }
}
