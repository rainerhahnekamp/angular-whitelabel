import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HolidaysComponent } from "./holidays/holidays.component";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { TranslocoModule } from "@ngneat/transloco";
import { HolidayCardComponent } from "./holidays/holiday-card.component";
import { HolidayCardsComponent } from "./holidays/holiday-cards.component";
import { DynamicModule } from "ng-dynamic-component";

@NgModule({
  declarations: [HolidaysComponent, HolidayCardComponent, HolidayCardsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: "",
        component: HolidaysComponent
      }
    ]),
    TranslocoModule,
    DynamicModule
  ]
})
export class HolidaysModule {}
