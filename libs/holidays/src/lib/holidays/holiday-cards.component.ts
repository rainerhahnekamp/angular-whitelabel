import { Holiday } from '../holiday';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HolidayCardsComponentInterface } from './holiday-cards-component.interface';

@Component({
  styles: [
    `
      div {
        display: flex;
        margin: 2em;
        justify-content: space-between;
      }

      mat-card {
        max-width: 250px;
      }
    `,
  ],
  template: ` <div>
    <mat-card *ngFor="let holiday of holidays">
      <mat-card-header>
        <mat-card-title>{{ holiday.title }}</mat-card-title>
        <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="holiday.imageUrl" [alt]="holiday.title" />
      <mat-card-content>
        {{ holiday.description }}
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button (click)="holidaySelected.emit(holiday)">
          More Info
        </button>
      </mat-card-actions>
    </mat-card>
  </div>`,
})
export class HolidayCardsComponent implements HolidayCardsComponentInterface {
  @Input() holidays: Holiday[] = [];
  @Output() holidaySelected = new EventEmitter<Holiday>();
}
