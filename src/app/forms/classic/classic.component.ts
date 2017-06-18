import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
      'title': 'my title',
      'subtitle': 'my subtitle'
    }
  }

  doSubmit(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      alert('form invalid')
    }
  }
}
