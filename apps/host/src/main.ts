// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
//
// if (environment.production) {
//   enableProdMode();
// }
//
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

import {bootHost, mountFeatureService, registerFeatureApp} from "@micro-ng/platform/host";

// @ts-ignore
const systemLoader = window.System;

const loadApp = (url) => async () => {
  const app = await systemLoader.import(url);
  return app.default;
}


const $q = document.querySelectorAll.bind(document);
const menus = JSON.parse($q('#menu-config')[0].innerHTML).menus;
debugger;

registerFeatureApp(
  'layout',
  loadApp('/layout/app/main.js'),
  function (location) {
    return true;
  },
  {menus}
)
menus.forEach(menu => {
  console.log(`[ LOGGER ] Registerd ${menu.name} App for URL ${menu.url} to load ${menu.path}`);
  registerFeatureApp(menu.name,
    loadApp(menu.path),
    (location) => {
      const returnVal = location.pathname.startsWith(menu.url);
      console.log(`[ LOGGER ] Path name= ${location.pathname}, menu ${menu.url}, returnVal ${returnVal}`);

      return returnVal;

    },
    {menus}
  );
})

// mountFeatureService(loadApp('/layout/app/main.js'), {menus, domElement: document.getElementById('some-container')});

bootHost();


