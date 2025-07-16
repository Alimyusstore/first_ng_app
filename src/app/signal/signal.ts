import { Component,  computed,  effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signals {
  data: number = 0;
  count: WritableSignal<number> = signal(0);
  counts = signal<number | string>(29);
  dataType: Signal<number> = computed(() => 20);
  compute: Signal<number> = computed(() => this.count()+this.data);
  constructor() {
    effect(() => {
      console.log(this.data);
      console.log(this.count());
    });
  }
  updateValue() {
    this.compute();
    this.data +=10;
    this.count.update((val) => val + 10);
    this.counts.set('hello');
    this.compute() ;
  }
}
