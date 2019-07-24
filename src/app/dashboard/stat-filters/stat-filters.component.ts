import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent {
  search: FormGroup;

  constructor(fb: FormBuilder) {
    this.search = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)],
      viewDetails: new FormGroup({
        numDetails: new FormControl()
      })
    });
  }

  submit() {
    console.log('formValue', this.search.value);
  }
}
