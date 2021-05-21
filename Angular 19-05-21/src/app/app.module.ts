import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributedirectiveComponet } from './attributedirective/attributedirective.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { studentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { customerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    studentComponent,
    DataBindingComponent,
    AttributedirectiveComponet,
    StructuraldirectiveComponent,
    UserFormComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    customerComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
