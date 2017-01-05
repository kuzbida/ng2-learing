import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent{
  clicked = new EventEmitter<String>();
  onClicked(){
    this.clicked.emit('It works!');
  }
}
