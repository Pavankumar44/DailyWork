import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = 'http://localhost:3000/student';


  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  createStudent(student:Student): Observable<Student>{
    return this.httpClient.post<Student>(this.baseUrl, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl+ '/' + id);
  }

  deleteStudent(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(this.baseUrl + '/' + id);

  }
  updateStudent(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.baseUrl + '/' + student.id , student);
  }
}
