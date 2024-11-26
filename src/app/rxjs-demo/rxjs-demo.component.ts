import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  imports: [],
  templateUrl: './rxjs-demo.component.html',
  styleUrl: './rxjs-demo.component.css',
})
export class RxjsDemoComponent {
  // Subjects
  public subject = new Subject<number>();
  public subjectCounter = 0;

  public behaviorSubject = new BehaviorSubject<number>(0);
  // when using a BehaviorSubject in a service we want to emit only a readonly observable
  public behaviorSubjectCounter = this.behaviorSubject.asObservable();

  public replaySubject = new ReplaySubject<number>(3);
  public replaySubjectCounter = 0;

  public asyncSubject = new AsyncSubject<number>();
  public internalAsyncSubjectCounter = 0;
  public asyncSubjectCounter = 0;

  constructor() {
    this.subject.subscribe((value) => {
      this.subjectCounter = value;
    });

    this.replaySubject.next(1);
    this.replaySubject.next(2);
    this.replaySubject.next(3);
    this.replaySubject.next(4);
    this.replaySubject.next(5);

    this.asyncSubject.subscribe((value) => {
      this.asyncSubjectCounter = value;
    });

    setInterval(() => {
      this.asyncSubject.next(this.internalAsyncSubjectCounter++);
    }, 1000);
  }

  increment() {
    this.subject.next(this.subjectCounter + 1);
    this.behaviorSubject.next(this.behaviorSubject.value + 1);
  }

  showReplaySubjectCounter(): void {
    this.replaySubject.subscribe((value) => {
      console.log(value);
      this.replaySubjectCounter = value;
    });
  }

  completeAsyncSubject(): void {
    this.asyncSubject.complete();
  }
}
