import { EventEmitter, Injectable, Type } from '@angular/core';
import { HolidayCardConfig } from './holiday-card.component';
import { Holiday } from '../holiday';
import { HolidayCardsComponent } from './hoiliday-cards.component';

export interface HolidayCardsComponentInterface {
  holidays: Holiday[];
  holidaySelected: EventEmitter<Holiday>;
}

@Injectable()
class DefaultHolidayConfig implements HolidayConfig {
  cardConfig: HolidayCardConfig = {
    showMoreInfo: false,
    showDescription: true,
    bookPlacement: 'bottom',
  };
  uiCardComponent = HolidayCardsComponent;
}

@Injectable({ providedIn: 'root', useClass: DefaultHolidayConfig })
export abstract class HolidayConfig {
  abstract cardConfig: HolidayCardConfig;
  abstract uiCardComponent: Type<HolidayCardsComponentInterface>;
}
