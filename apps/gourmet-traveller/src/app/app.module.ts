import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { createDefaultRoutes, defaultModules, defaultProviders } from "@eternal/app-factory";
import { Config } from "@eternal/shared/config";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { HolidaysService } from "../../../../libs/holidays/src/lib/holidays.service";
import { DishesService } from "./dishes.service";
import { HolidayConfig } from "../../../../libs/holidays/src/lib/holidays/holiday-config";
import { DishesComponent } from "./dishes.component";

const holidayConfig :HolidayConfig = {
  cardConfig: {
    bookPlacement: "top",
    showDescription: false,
    showMoreInfo: false,
  },
  cardComponent: DishesComponent
}

@NgModule({
  declarations: [AppComponent, HomeComponent, DishesComponent],
  imports: [BrowserModule, ...defaultModules, RouterModule.forRoot(createDefaultRoutes(HomeComponent))],
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
    {provide: HolidaysService, useClass: DishesService},
    {provide: HolidayConfig, useValue: holidayConfig }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
