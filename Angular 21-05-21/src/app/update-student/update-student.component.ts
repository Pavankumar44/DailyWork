import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
   
  updateForm: FormGroup;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required)
    })
    const id =localStorage.getItem('id');
    if(+id > 0){
      this.studentService.getStudentById(+id).subscribe(data =>{
        this.updateForm.patchValue(data);
      });
    }

  }
  onSubmit(): void {
    this.studentService.updateStudent(this.updateForm.value).subscribe
    (data => {
      //console.log(data);
      this.router.navigate(['']);
    },
    error => console.log(error));
  }

}
