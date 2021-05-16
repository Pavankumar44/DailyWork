import { Component } from "@angular/core";
import { STUDENTS } from "../student-mock";

@Component({
    selector: "app-student",
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']

})

export class studentcomponent {
    student = {name: 'Pavan', age:23, address:'Hyderabad'}
    Student = STUDENTS;

}