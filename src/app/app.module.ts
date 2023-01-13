import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './mycomponents/todolist/todolist.component';
import { TodoComponent } from './mycomponents/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './mycomponents/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
