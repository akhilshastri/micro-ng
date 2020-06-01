import {Injectable} from '@angular/core';
import {Router} from '../core/router';

@Injectable({
  providedIn: 'root'
})
export class HostRouterService {

  router: Router = null;
  config = {
    containerId: 'feature-container',
    apps: {
      transactions: {
        name:'transactions',
        scripts: [
          'main.js'
        ],
        loaded: false,
        element: 'micro-ng-root',
        route: '/client-c'
      }
    }
  }

  constructor() {
    this.router = new Router({mode: 'history'});
    this.router.add(/core\/(.*)/, this.loadApp);
  }

  add(url) {
    this.router.add(url, this.loadApp)
  }

  loadApp = (appname)=> {
    const app = this.config.apps[appname];
    if (app.loaded) return;
    const container = document.getElementById(this.config.containerId || 'feature-container');

    const element = document.createElement(app.element);
    container.appendChild(element);
    app.scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = `${app.name}/${src}`;
      container.appendChild(script);
    });
    debugger;
  }

  navigate(path) {
    this.router.navigate(path)
  }

  // listen(){
  //   this.router.listen();
  // }

}
