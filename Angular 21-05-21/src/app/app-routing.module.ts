import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentComponent} from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { customerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: '', component: customerComponent},
  {path:'add-customer', component: AddCustomerComponent},
  {path:'customer/:id', component: customerComponent},
  {path:'update-customer',component: UpdateCustomerComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
