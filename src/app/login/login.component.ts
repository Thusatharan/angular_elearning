import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: any;
  password: any;


  constructor(private studentService: StudentService, private snackBar: MatSnackBar, private _router: Router) { }

  onSubmit() {
    this.studentService.login({ 'name': this.name, 'password': this.password }).subscribe({
      next: (response) => {
        console.log(response.data.name);
        this.snackBar.open('Hello, world!', 'Dismiss', {
          duration: 2000
        });
        this._router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error!', error.error.message);
        this.snackBar.open('Hello, world!', 'Dismiss', {
          duration: 2000
        });
      }
    }
    );
  }

}
