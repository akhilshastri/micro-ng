
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { featureApp, getHostAppExtraProviders} from '@micro-ng/platform/feature';

import { hostAppPropsSubject } from './host-app/host-app-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = featureApp({
  bootstrapFunction: hostAppProps => {
    debugger;
    hostAppPropsSubject.next(hostAppProps);
    return platformBrowserDynamic(getHostAppExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app2-rootxxxx />',
  Router,
  NgZone: NgZone,
});

// alert('loaded');
export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
