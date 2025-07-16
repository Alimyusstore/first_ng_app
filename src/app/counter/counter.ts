import { Component, signal } from '@angular/core';

@Component({
  selector: 'counters',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter: number = 0;
  count = signal(0);
  increment() {
    this.counter++;
  }
  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  reset() {
    this.counter = 0;
  }

  updateCounter(val: string) {
    if (val == 'dec') {
      if (this.count() > 0) {
        this.count.set(this.count() - 1);
      }
    } else if (val == 'inc') {
      this.count.set(this.count() + 1);
    } else {
      this.count.set(0);
    }
  }

  handleCounter(val: string) {
    if (val == 'minus') {
      this.decrement();
    } else if (val == 'plus') {
      this.increment();
    } else {
      this.reset();
    }
  }
}
