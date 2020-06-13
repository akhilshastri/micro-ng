import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, Inject, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TimeOutComponent } from './components/time-out/time-out.component';
import {DOCUMENT} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {EmptyRouteComponent} from "./components/empty-route/empty-route.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SpinnerComponent, TimeOutComponent,EmptyRouteComponent],
  imports: [BrowserModule,AppRoutingModule],
  providers: [],
  bootstrap: [],
  entryComponents:[HeaderComponent,FooterComponent,AppComponent,SpinnerComponent,TimeOutComponent]
})
export class AppModule {
  constructor(@Inject(DOCUMENT) private dom) {
  }

  ngDoBootstrap(app:ApplicationRef):void{

    const headerContainer = this.dom.querySelector('#layout-header');
    const footerContainer = this.dom.querySelector('#layout-footer');

    headerContainer.appendChild(this.dom.createElement('micro-ng-header'));
    footerContainer.appendChild(this.dom.createElement('micro-ng-footer'));

    app.bootstrap(HeaderComponent);
    app.bootstrap(FooterComponent);
  }
}
