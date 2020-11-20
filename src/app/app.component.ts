import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular10-lecture3-task4';
  name = 'Tom';

  @ViewChild('userName')
  nameParagraph: ElementRef;

  change(): void {
    this.nameParagraph.nativeElement.textContent = 'hell';
  }
}
