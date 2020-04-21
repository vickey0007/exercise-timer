import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-preptime',
  templateUrl: './preptime.component.html',
  styleUrls: ['./preptime.component.scss']
})
export class PreptimeComponent implements OnInit {
  counter: number;
  timerRef;
  running: boolean = false;
  constructor(private common: CommonService, private router: Router) { }
  ngOnInit(): void {
    this.startTimer()
    this.playAudio();
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/ready.wav";
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
        if (this.counter == 6) {
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
    this.router.navigate(['/rep']);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }


}
