import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  quotes = ["Dont COMPLAIN, Enjoy the PAIN", "You earn your BODY", "No PAIN, No GAIN", "HUSTLE for that MUSCLE"];
  formData = {};
  exerciseCounter = 0;
  repsCounter = 0;
  // formData = {
  //   "exerIterval": 60,
  //   "repInterval": 20,
  //   "timeReps": 35,
  //   "noExcersises": 12,
  //   "noReps": 3,
  // }

  constructor() { }
}
