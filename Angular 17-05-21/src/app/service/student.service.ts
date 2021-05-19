import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { studentcomponent } from '../student/student.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = 'htttp://localhost:3000/student';


  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  createEmployee(student:Student): Observable<Student>{
    return this.httpClient.post<Student>(this.baseUrl, student);
  }

  getEmployeeById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl+ '/' + id);
  }

  deleteEmployee(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(this.baseUrl + '/' + id);

  }
  updateEmployee(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.baseUrl + '/' + student.id , employee);
  }
}
