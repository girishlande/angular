import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer-test',
  templateUrl: './timer-test.component.html',
  styleUrls: ['./timer-test.component.css']
})
export class TimerTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.activePage = 2;
  }

  activePage: number = 2;
  timeLeft: number = 2;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        if (this.activePage == 1) {
          this.activePage = 2;
          this.router.navigate(['T2']);
        } else {
          this.activePage = 1;
          this.router.navigate(['T1']);
        }
        this.timeLeft = 2;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
