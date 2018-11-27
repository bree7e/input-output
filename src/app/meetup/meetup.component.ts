import { Component, Input,
  Output, EventEmitter } from '@angular/core';
import { Meetup } from './meetup.interface';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent {
  @Input()
  meetup: Meetup = null;

  @Output()
  delete = new EventEmitter();

  onClick() {
    this.delete.emit(this.meetup);
  }
}
