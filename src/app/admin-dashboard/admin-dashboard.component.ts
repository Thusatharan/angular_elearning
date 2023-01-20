import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  studentsList: any;

  constructor(private studentService: StudentService, private router: Router) { }
  ngOnInit(): void {
    this.studentService.fetchStudents().subscribe((response) => {
      this.studentsList = response.data
      console.log(this.studentsList)
    });
  }

  goAddStudent() {
    this.router.navigate(['/addStudent']);
  }
}
