import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
