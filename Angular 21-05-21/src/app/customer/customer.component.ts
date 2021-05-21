import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class customerComponent implements OnInit {
 // student = {name: 'Pavan', age:23, address:'Hyderabad'}
  customers: Customer[];

  constructor(private customerService:CustomerService, private router: Router) {}
  //students: Student[] = STUDENTS;
      ngOnInit(): void {
         this.customerService.getAllCustomers().subscribe(data => {
              this.customers=data;
         });
      }

      updateCustomer(customer: Customer): void{
          localStorage.removeItem('id');
          localStorage.setItem('id', customer.id.toString());
          this.router.navigate(['update-customer']);
      }

      deleteCustomer(customer: Customer):void{
          this.customerService.deleteCustomerById(customer.id).subscribe();
          this.customers = this.customers.filter(c => c !== customer);
      }
  

}
