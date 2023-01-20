import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  login(formData: any) {
    return this.http.post<any>('http://127.0.0.1:4000/api/login', formData);
  }

  fetchNotesList(subjectData: any) {
    return this.http.post<any>('http://127.0.0.1:4000/api/getNotes', subjectData);
  }

  addStudent(formData: any) {
    return this.http.post<any>('http://127.0.0.1:4000/api/addStudent', formData);
  }
  addnotes(formData: any) {
    return this.http.post<any>('http://127.0.0.1:4000/api/addnotes', formData);
  }

  fetchStudents() {
    return this.http.get<any>('http://127.0.0.1:4000/api/getStudents');
  }
  fetchAllNotes() {
    return this.http.get<any>('http://127.0.0.1:4000/api/getAllNotes');
  }
}
