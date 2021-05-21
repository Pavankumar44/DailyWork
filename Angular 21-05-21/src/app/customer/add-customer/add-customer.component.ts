import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      
    });
  }

  onSubmit(): void{
    //this.countfromChild.emit(this.countfromParent + 5);
    this.customerService.createCustomer(this.signupForm.value).subscribe(data =>{
      console.log("Customer Data added successfully");
      this.router.navigate(['']);
    });
    console.log(this.signupForm);
  }


}
