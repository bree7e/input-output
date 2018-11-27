import { Component } from '@angular/core';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent {
  meetupList = [
    {
      name: 'Встреча друзей',
    },
    {
      name: 'Конференция',
    },
    {
      name: 'Благотворительный ужин',
    },
  ];

  deleteMeetup(meetup) {
    this.meetupList = this.meetupList.filter(m => m.name !== meetup.name);
  }
}
