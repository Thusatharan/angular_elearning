import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddNotesComponent } from './admin-add-notes/admin-add-notes.component';
import { AdminAddstudentComponent } from './admin-addstudent/admin-addstudent.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNotesComponent } from './admin-notes/admin-notes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: ''
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: SubjectsComponent,
    path: 'subject'
  },
  {
    component: NotesComponent,
    path: 'notes/:subject'
  },
  {
    component: AdminDashboardComponent,
    path: 'admin'
  },
  {
    component: AdminAddstudentComponent,
    path: 'addStudent'
  },
  {
    component: AdminNotesComponent,
    path: 'notesList'
  },
  {
    component: AdminAddNotesComponent,
    path: 'addNotes'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
