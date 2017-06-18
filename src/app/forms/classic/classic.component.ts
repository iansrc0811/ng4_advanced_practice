import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  data: any = {};
  constructor() { }

  ngOnInit() {
    this.data = {
      'title': 'my title'
    }
  }

  doSubmit(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      alert('form invalid')
    }
  }
}
