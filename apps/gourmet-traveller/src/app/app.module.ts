import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defaultModules, defaultProviders } from '@eternal/app-factory';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { Config } from '@eternal/shared/config';
import { environment } from '../environments/environment';
import { routes } from './gourmet-routes';
import { RouterModule } from '@angular/router';
import { HolidaysService } from '../../../../libs/holidays/src/lib/holidays.service';
import { FoodsService } from './foods';
import { HolidayConfig } from '../../../../libs/holidays/src/lib/holidays/holiday-config';
import { DishesComponent } from './dishes.component';

const holidayConfig: HolidayConfig = {
  cardConfig: {
    showDescription: false,
    showMoreInfo: true,
    bookPlacement: 'top',
  },
  holidayCardsComponent: DishesComponent,
};

@NgModule({
  declarations: [AppComponent, HomeComponent, DishesComponent],
  imports: [
    BrowserModule,
    ...defaultModules,
    RouterModule.forRoot([...routes]),
  ],
  providers: [
    ...defaultProviders,
    {
      provide: Config,
      useValue: new Config(
        'Top Austrian Food',
        'gourmet-traveller',
        environment.baseUrl,
        environment.authUrl,
        { diaryEnabled: false, customerEnabled: true, holidaysEnabled: true }
      ),
    },
    {
      provide: HolidaysService,
      useClass: FoodsService,
    },
    {
      provide: HolidayConfig,
      useValue: holidayConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
