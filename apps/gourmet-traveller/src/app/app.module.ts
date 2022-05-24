import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  createDefaultRoutes,
  defaultModules,
  defaultProviders,
} from '@eternal/app-factory';
import { Config } from '@eternal/shared/config';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
