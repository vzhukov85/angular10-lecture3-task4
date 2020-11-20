import { Component } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  template: ` <p>{{ counter }}</p> `,
  styles: [],
})
export class ChildComponent {
  counter = 0;
  increment(): void {
    this.counter++;
  }
  decrement(): void {
    this.counter--;
  }
}
