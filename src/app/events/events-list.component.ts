import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

declare let toastr

@Component({
  template: `
  <div class="container">
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></events-thumbnail>
      </div>
    </div>
  </div>
  ` 
})

export class EventListComponent implements OnInit {
  events:any

  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(message, eventName) {
    this.toastr.success(message, eventName)
  }

}

