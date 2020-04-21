import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { timer } from "rxjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-reptime',
  templateUrl: './reptime.component.html',
  styleUrls: ['./reptime.component.scss']
})
export class ReptimeComponent implements OnInit {
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
    audio.src = "../../../assets/start.wav";
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
        if (this.counter == this.common.formData['timeReps']) {
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
    this.common.repsCounter++;
    if (this.common.repsCounter == this.common.formData['noReps']) {
      this.common.repsCounter = 0;
      this.router.navigate(['/exerciseint'])
    } else {
      this.router.navigate(['/interval']);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }
}
