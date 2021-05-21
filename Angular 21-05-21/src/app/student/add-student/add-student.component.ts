import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() countfromParent: number;
  student: Student;

  @Output() countfromChild = new EventEmitter<number>();
  signupForm: FormGroup;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      id: new FormControl(this.countfromParent, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void{
    //this.countfromChild.emit(this.countfromParent + 5);
    this.studentService.createStudent(this.signupForm.value).subscribe(data =>{
      console.log("Data added successfully");
      this.router.navigate(['']);
    })
    console.log(this.signupForm);
  }

}