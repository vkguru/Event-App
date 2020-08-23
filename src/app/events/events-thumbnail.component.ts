import { Component, Input } from '@angular/core'

@Component({
  selector: 'events-thumbnail',
  template: `
  
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'"> (Early Start) </span>
          <span *ngSwitchCase="'10:00 am'"> (Late Start) </span>
          <span *ngSwitchDefault> (Normal) </span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div>Location: {{event?.location?.address}}<span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span></div>
    </div>

  `,
  styles: [`
    .pad-left {
      padding-left: 5px;
    }

    .thumbnail {
      min-height: 210px;
    }

    .yellow {color: yellow !important;}

    .bold {font-weight: bold;}
  `]
})

export class EventThumbnailComponent {
  @Input() event:any
  
  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return {yellow: isEarlyStart, bold: isEarlyStart}
  }

}