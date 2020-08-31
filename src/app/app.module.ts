import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { 
  EventListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  EventService,
  EventThumbnailComponent,
  CreateEventComponent 
} from './events/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToastrService } from './common/toastr.service'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventRouteActivator, 
    EventService, 
    ToastrService,
    EventListResolver,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
    return true
}