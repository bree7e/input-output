import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Input/Output';
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
