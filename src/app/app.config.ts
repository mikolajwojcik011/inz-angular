import {ApplicationConfig, isDevMode, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './router/app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import {provideState, provideStore} from '@ngrx/store';
import {testReducer} from "./store/test/test.reducer";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideHttpClient} from "@angular/common/http";
import {GetTestEffect} from "./store/test/effects/get-test.effect";
import {PostTestEffect} from "./store/test/effects/post-test.effect";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideEffects([GetTestEffect, PostTestEffect]),
    provideRouterStore(),
    provideStore(),
    provideState({name: 'test', reducer: testReducer}),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ]
};
