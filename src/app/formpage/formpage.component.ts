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
  constructor(private fb: FormBuilder, private common: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      noExcersises: ['', Validators.required],
      noReps: ['', Validators.required],
      timeReps: ['', Validators.required],
      repInterval: ['', Validators.required],
      exerIterval: ['', Validators.required]
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
