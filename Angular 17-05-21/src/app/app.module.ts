import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { studentcomponent } from './student/student.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributedirectiveComponet } from './attributedirective/attributedirective.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    studentcomponent,
    DataBindingComponent,
    AttributedirectiveComponet,
    StructuraldirectiveComponent,
    UserFormComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
