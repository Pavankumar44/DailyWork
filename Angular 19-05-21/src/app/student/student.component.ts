import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "../model/student";
import { StudentService } from "../service/student.service";
import { STUDENTS } from "../student-mock";

@Component({
    selector: "app-student",
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']

})

export class studentComponent implements OnInit {
    student = {name: 'Pavan', age:23, address:'Hyderabad'}
    students: Student[];

    constructor(private studentService:StudentService, private router: Router) {}
    //students: Student[] = STUDENTS;
        ngOnInit(): void {
           this.studentService.getAllStudents().subscribe(data => {
                this.students=data;
           });
        }

        updateStudent(student: Student): void{
            localStorage.removeItem('id');
            localStorage.setItem('id', student.id.toString());
            this.router.navigate(['update-student']);
        }

        deleteStudent(student: Student):void{
            this.studentService.deleteStudent(student.id).subscribe();
            this.students = this.students.filter(s => s !== student);
        }
    

}