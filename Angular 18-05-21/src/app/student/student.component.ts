import { Component, OnInit} from "@angular/core";
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

    constructor(private studentService:StudentService) {}
    //students: Student[] = STUDENTS;
        ngOnInit(): void {
           this.studentService.getAllStudents().subscribe(data => {
                this.students=data;
           });
        }
    

}