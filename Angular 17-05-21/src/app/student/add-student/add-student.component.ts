import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() countfromParent: number;

  @Output() countfromChild = new EventEmitter<number>();
  signupForm: FormGroup;
  constructor() { }

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
    this.countfromChild.emit(this.countfromParent + 5);
    console.log(this.signupForm);
  }

}