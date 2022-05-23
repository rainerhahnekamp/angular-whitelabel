import { Holiday } from '../holiday';
import { EventEmitter } from '@angular/core';

export interface HolidayCardsComponentInterface {
  holidays: Holiday[];
  holidaySelected: EventEmitter<Holiday>;
}
