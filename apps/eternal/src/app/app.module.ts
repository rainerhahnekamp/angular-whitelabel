import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-AT';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  createDefaultRoutes,
  defaultModules,
  defaultProviders,
} from '@eternal/app-shell';
import { Config } from '@eternal/shared/config';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

registerLocaleData(localeDe, 'de-AT');

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
          'Unforgettable Holidays',
          'eternal',
          environment.baseUrl,
          environment.authUrl,
          { diaryEnabled: true, customerEnabled: true, holidaysEnabled: true }
        ),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
