import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exerciseinterval',
  templateUrl: './exerciseinterval.component.html',
  styleUrls: ['./exerciseinterval.component.scss']
})
export class ExerciseintervalComponent implements OnInit {
  counter: number;
  timerRef;
  startText = 'Start';
  running: boolean = false;

  constructor(private common: CommonService, private router: Router) { }
  ngOnInit(): void {
    this.playAudio();
    this.startTimer()
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/break.wav";
    audio.load();
    audio.play();
  }

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        var str = this.counter.toString();
        str = str.slice(0, -3);
        this.counter = parseInt(str) || 0;
        if (this.counter == this.common.formData['exerIterval']) {
          this.stopTimer()
        }
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  stopTimer() {
    this.counter = 0;
    clearInterval(this.timerRef);
    this.common.exerciseCounter++;
    if (this.common.exerciseCounter == this.common.formData['noExcersises']) {
      this.common.exerciseCounter = 0;
      this.router.navigate(['/clock'])
    } else {
      this.router.navigate(['/prep']);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
}
