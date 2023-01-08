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
}
