import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'title': 'This is title',
      'subtitle': 'This is subtitle',
      name: this.fb.group({
        'firstname': 'This is first name',
        'lastname': 'This is last name'
      }),
      'addresses': this.fb.array([
        this.fb.control('Address 1'),
        this.fb.control('Address 2')
      ])
    })
  }

  addNewAddress() {
    let addresses = this.form.get('addresse') as FormArray;
    addresses.push(
      this.fb.control('New Address')
    );
  }

}
