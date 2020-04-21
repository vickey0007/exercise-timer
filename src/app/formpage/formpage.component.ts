import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss']
})
export class FormpageComponent implements OnInit {
  quote = 'Dont COMPLAIN, Enjoy the PAIN';
  counter = 1;
  x;
  myForm: FormGroup;
  noExcersisesE = false;
  constructor(private fb: FormBuilder, private common: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      noExcersises: ['', [Validators.required, Validators.pattern(/^[3-9]$|^[1-3][0-9]$|^[4][0-5]$/)]],
      noReps: ['', [Validators.required, Validators.pattern(/^[2-9]$|^[1-3][0-9]$|^[4][0-5]$/)]],
      timeReps: ['', [Validators.required, Validators.pattern(/^[5-9]$|^[1-3][0-9]$|^[4][0-5]$/)]],
      repInterval: ['', [Validators.required, Validators.pattern(/^[5-9]$|^[1-3][0-9]$|^[4][0-5]$/)]],
      exerIterval: ['', [Validators.required, Validators.pattern(/^[5-9]$|^[1-3][0-9]$|^[4][0-5]$/)]]
    });
    this.x = setInterval(() => { this.getQuote(); }, 3000);
  }

  getQuote() {
    if (this.counter == this.common.quotes.length) {
      this.counter = 0;
    }
    this.quote = this.common.quotes[this.counter];
    this.counter++;
  }

  noExcersises() {
    if (this.myForm.value.noExcersises < 3 || this.myForm.value.noExcersises > 25) {
      this.noExcersisesE = true;
    }
  }

  vickey() {
    this.common.formData = {
      "exerIterval": 60,
      "repInterval": 20,
      "timeReps": 35,
      "noExcersises": 12,
      "noReps": 3,
    }
    this.router.navigate(['/prep']);
  }

  onSubmit(form: FormGroup) {
    this.common.formData = form.value;
    this.router.navigate(['/prep'])
  }

  ngOnDestroy() {
    if (this.x) {
      clearInterval(this.x);
    }
  }
}
