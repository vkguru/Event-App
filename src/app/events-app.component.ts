import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <event-nav-bar></event-nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
