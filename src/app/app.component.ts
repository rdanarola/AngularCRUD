import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { CommonService } from './common.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cmnService: CommonService) { }
  tododata = "";
  valbutton = "Save";

  ngOnInit() {
    this.cmnService.gettodo().subscribe(data => this.tododata = data)
  }

  onSave = function (todo, isValid: boolean) {
    todo.mode = this.valbutton;
    if (todo.title && todo.description) {
      this.cmnService.savetodo(todo)
        .subscribe(data => {
          //alert(data.data);
          this.ngOnInit();
          this.title = '';
          this.description = '';
          this.valbutton = 'Save';
        }, error => this.errorMessage = error)
    }
    else {
      alert("Please enter all details");
    }
  }
  edit = function (todo) {
    this.id = todo._id;
    this.title = todo.title;
    this.description = todo.description;
    this.valbutton = "Update";
  }

  delete = function (id) {
    this.cmnService.deletetodo(id).subscribe(data => { /*alert(data.data);*/ this.ngOnInit(); }, error => this.errorMessage = error)
  }

}  