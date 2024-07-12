import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { map, takeUntil, takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private countdownTimerRef: any;
  private initialTime: number = 0;
  private destroy$ = new Subject<void>();

  private _timerValue = new BehaviorSubject<string>('00:00:00');
  public readonly timerValue$: Observable<string> = this._timerValue.asObservable();
  public countdownEnd$ = new Subject<void>();

  constructor() {}

  startCountdown(seconds: number): void {
    this.initialTime = seconds;
    if (this.countdownTimerRef) {
      clearInterval(this.countdownTimerRef);
    }
    this.countdownTimerRef = interval(1000).pipe(
      takeWhile(() => this.initialTime >= 0),
      takeUntil(this.destroy$),
      map(() => {
        let hours = Math.floor(this.initialTime / 3600);
        let minutes = Math.floor((this.initialTime % 3600) / 60);
        let seconds = this.initialTime % 60;

        let formattedHours = hours < 10 ? '0' + hours : hours.toString();
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
        let formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

        this.initialTime--;
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      })
    ).subscribe(time => {
      this._timerValue.next(time);
      if (this.initialTime < 0) {
        this.stopCountdown();
        this.countdownEnd$.next();
      }
    });
  }

  stopCountdown(): void {
    this.destroy$.next();
    if (this.countdownTimerRef) {
      clearInterval(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  ngOnDestroy(): void {
    this.stopCountdown();
    this.destroy$.complete();
  }
}
