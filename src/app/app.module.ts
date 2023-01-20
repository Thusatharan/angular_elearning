import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { NotesComponent } from './notes/notes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddstudentComponent } from './admin-addstudent/admin-addstudent.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminNotesComponent } from './admin-notes/admin-notes.component';
import { AdminAddNotesComponent } from './admin-add-notes/admin-add-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SubjectsComponent,
    NotesComponent,
    AdminDashboardComponent,
    AdminAddstudentComponent,
    AdminSidebarComponent,
    AdminNotesComponent,
    AdminAddNotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
