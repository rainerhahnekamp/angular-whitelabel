import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Holiday } from '../../../../libs/holidays/src/lib/holiday';
import { HolidayCardsComponentInterface } from '../../../../libs/holidays/src/lib/holidays/holiday-cards-component.interface';

@Component({
  styles: [
    `
      img {
        max-width: 250px;
        height: auto;
      }
    `,
  ],
  template: `<div class="container">
    <div *ngFor="let dish of holidays">
      <h3>{{ dish.title }}</h3>
      <p>{{ dish.teaser }}</p>
      <img [src]="dish.imageUrl" [alt]="dish.title" />
      <button (click)="holidaySelected.emit(dish)">Eat me</button>
    </div>
  </div>`,
})
export class DishesComponent implements HolidayCardsComponentInterface {
  @Output() holidaySelected = new EventEmitter<Holiday>();
  @Input() holidays: Holiday[] = [];
}
