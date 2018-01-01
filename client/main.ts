import { enableProdMode } from '@angular/core';
// import 'angular2-meteor-polyfills';
import 'core-js/es6/set';
// import "@angular/material/prebuilt-themes/indigo-pink.css";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app.module';


enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);


