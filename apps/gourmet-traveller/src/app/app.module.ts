import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  createDefaultRoutes,
  defaultModules,
  defaultProviders,
} from '@eternal/app-factory';
import { Config } from '@eternal/shared/config';
import { of } from 'rxjs';
import { HolidaysService } from '../../../../libs/holidays/src/lib/holidays.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { holidays } from '../assets/holidays';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    ...defaultModules,
    RouterModule.forRoot(createDefaultRoutes(HomeComponent)),
  ],
  providers: [
    ...defaultProviders,
    {
      provide: Config,
      useFactory: () =>
        new Config(
          'Top Austrian Food',
          'gourmet-traveller',
          environment.baseUrl,
          environment.authUrl,
          { diaryEnabled: false, customerEnabled: false, holidaysEnabled: true }
        ),
    },
    {
      provide: HolidaysService,
      useValue: {
        findAll: () => of(holidays),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
