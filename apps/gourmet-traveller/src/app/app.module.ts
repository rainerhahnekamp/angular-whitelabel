import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  createDefaultRoutes,
  defaultModules,
  defaultProviders,
} from '@eternal/app-shell';
import { Config } from '@eternal/shared/config';
import { of } from 'rxjs';
import { HolidaysService } from '../../../../libs/holidays/src/lib/holidays.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

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
          'Finest Cuisines in the World',
          'gourmet-traveller',
          environment.baseUrl,
          environment.authUrl,
          { diaryEnabled: false, customerEnabled: false, holidaysEnabled: true }
        ),
    },
    {
      provide: HolidaysService,
      useValue: {
        findAll: () =>
          of([
            {
              id: 1,
              title: 'Tafelspitz',
              teaser: 'beef at its best',
              description:
                'Tafelspitz is boiled veal or beef in broth, served with a mix of minced apples and horseradish. It is a classic dish of the Viennese cuisine and popular in all of Austria and the neighboring German state of Bavaria.',
              imageUrl: 'assets/Tafelspitz.jpg',
              typeId: 1,
              durationInDays: 3,
              minCount: 5,
              maxCount: 12,
            },
            {
              id: 2,
              title: 'Wiener Schnitzel',
              teaser: 'Traditional Lunch',
              description:
                'Wiener schnitzel, sometimes spelled Wienerschnitzel, as in Switzerland, is a type of schnitzel made of a thin, breaded, pan-fried veal cutlet. It is one of the best known specialities of Viennese cuisine, and one of the national dishes of Austria.',
              imageUrl: 'assets/WienerSchnitzel.jpg',
              typeId: 1,
              durationInDays: 3,
              minCount: 5,
              maxCount: 12,
            },
            {
              id: 3,
              title: 'Kardinalschnitte',
              teaser: 'Something for the dessert?',
              description:
                'The Cardinal Slices are a popular dessert of the Viennese cuisine and taste divine – in the truest sense of the word. In fact, the name of the Viennese delicacy results from its visual appearance. The sponge mixture in combination with beaten egg whites corresponds perfectly to the colors of the Catholic Church – yellow and white. Don’t hesitate to taste a piece of this heavenly pleasure!',
              imageUrl: 'assets/Kardinalschnitte.jpg',
              typeId: 1,
              durationInDays: 3,
              minCount: 5,
              maxCount: 12,
            },
          ]),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
