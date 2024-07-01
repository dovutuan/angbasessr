import {ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideServiceWorker} from '@angular/service-worker';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {en_US, provideNzI18n} from 'ng-zorro-antd/i18n';
import {FormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from '@angular/common/http';
import {CustomTranslateModule} from '@share/modules/custom-translate.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideClientHydration(),

    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),

    provideNzI18n(en_US),

    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(FormsModule),

    importProvidersFrom(NzModalModule),
    importProvidersFrom(CustomTranslateModule),

    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
