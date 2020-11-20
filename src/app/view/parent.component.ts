import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: ` <app-child-comp #counter></app-child-comp>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>`,
  styles: [],
})
export class ParentComponent {
  @ViewChild(ChildComponent, {static: false})
  private childComponent: ChildComponent;

  increment(): void {
    this.childComponent.increment();
  }

  decrement(): void {
    this.childComponent.decrement();
  }
}
