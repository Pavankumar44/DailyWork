import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { studentcomponent } from './student/student.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributedirectiveComponet } from './attributedirective/attributedirective.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';

@NgModule({
  declarations: [
    AppComponent,
    studentcomponent,
    DataBindingComponent,
    AttributedirectiveComponet,
    StructuraldirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
