import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin-add-notes',
  templateUrl: './admin-add-notes.component.html',
  styleUrls: ['./admin-add-notes.component.css']
})
export class AdminAddNotesComponent {
  subjectname: any;
  question: any;
  answer: any;


  constructor(private studentService: StudentService, private snackBar: MatSnackBar, private _router: Router) { }

  onAddNotes() {
    this.studentService.addnotes({ 'subjectname': this.subjectname, 'question': this.question, 'answer': this.answer }).subscribe({
      next: (response) => {
        console.log(response.data.name);
        this.successNotification();
        // this._router.navigate(['/admin']);
      },
      error: (error) => {
        console.error('Error!', error.error.message);
      }
    }
    );
  }

  goToStudent() {
    this._router.navigate(['admin']);
  }

  successNotification() {
    Swal.fire('Success', 'Note added successfully', 'success');
  }
  errorNotification() {
    Swal.fire('Sorry', 'We we could not add the note', 'error');
  }

}
