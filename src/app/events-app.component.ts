import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <event-nav-bar></event-nav-bar>
    <events-list></events-list>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
