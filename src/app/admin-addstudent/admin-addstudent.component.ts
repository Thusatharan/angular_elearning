import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin-addstudent',
  templateUrl: './admin-addstudent.component.html',
  styleUrls: ['./admin-addstudent.component.css']
})
export class AdminAddstudentComponent {
  name: any;
  password: any;
  age: any;
  grade: any;


  constructor(private studentService: StudentService, private snackBar: MatSnackBar, private _router: Router) { }

  onAddStudent() {
    this.studentService.addStudent({ 'name': this.name, 'password': this.password, 'age': this.age, 'grade': this.grade }).subscribe({
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
    Swal.fire('Success', 'User added successfully', 'success');
  }
  errorNotification() {
    Swal.fire('Sorry', 'We we could not create the student', 'error');
  }

}
