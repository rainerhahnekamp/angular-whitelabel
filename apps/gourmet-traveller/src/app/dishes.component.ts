import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { Holiday } from "../../../../libs/holidays/src/lib/holiday";
import {
  HolidayCardsComponentInterface
} from "../../../../libs/holidays/src/lib/holidays/holiday-card-component.interface";

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
export class DishesComponent implements HolidayCardsComponentInterface, OnChanges {
  @Output() holidaySelected = new EventEmitter<Holiday>();
  @Input() holidays: Holiday[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log("asdf")
  }
}
