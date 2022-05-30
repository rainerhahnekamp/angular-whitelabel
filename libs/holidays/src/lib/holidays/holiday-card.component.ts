import { Component, Input } from "@angular/core";
import { Holiday } from "../holiday";
import { HolidayCardConfig } from "./holiday-card-config";

@Component({
  selector: 'eternal-holiday-card',
  template: `<mat-card *ngIf="holiday && config">
    <mat-card-header>
      <mat-card-title>{{ holiday.title }}</mat-card-title>
      <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
      <button *ngIf="config.bookPlacement === 'top'" mat-raised-button>
        {{ 'holidays.book' | transloco }}
      </button>
    </mat-card-header>
    <img mat-card-image [src]="holiday.imageUrl" [alt]="holiday.title" />
    <mat-card-content *ngIf="config.showDescription">
      {{ holiday.description }}
    </mat-card-content>
    <mat-card-actions>
      <button *ngIf="config.bookPlacement === 'bottom'" mat-raised-button>
        {{ 'holidays.book' | transloco }}
      </button>
      <button *ngIf="config.showMoreInfo" mat-raised-button>More Info</button>
    </mat-card-actions>
  </mat-card>`,
})
export class HolidayCardComponent {
  @Input() holiday: Holiday | undefined;
  @Input() config: HolidayCardConfig | undefined
}
