import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent {
  constructor(private router: Router) { }

  goToNotes(subject: string) {
    this.router.navigate(['notes', subject]);
  }
}
