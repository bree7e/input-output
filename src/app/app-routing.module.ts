import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeetupListComponent } from './meetup-list/meetup-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'event/list', pathMatch: 'full' },
  { path: 'event/list', component: MeetupListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
