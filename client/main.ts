import { enableProdMode } from '@angular/core';
import 'core-js/es6/set';
import 'zone.js/dist/zone';
// import "@angular/material/prebuilt-themes/indigo-pink.css";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app.module';


enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);


