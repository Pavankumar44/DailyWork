import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { studentComponent} from './student/student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: studentComponent},
  {path:'add-student', component: AddStudentComponent},
  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
