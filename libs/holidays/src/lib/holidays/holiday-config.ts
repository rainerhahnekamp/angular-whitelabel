import { Injectable, Type } from '@angular/core';
import { HolidayCardConfig } from './holiday-card.component';
import { HolidayCardsComponentInterface } from './holiday-cards-component.interface';
import { HolidayCardsComponent } from './holiday-cards.component';

@Injectable()
class DefaultHolidayConfig implements HolidayConfig {
  cardConfig: HolidayCardConfig = {
    showMoreInfo: false,
    showDescription: true,
    bookPlacement: 'bottom',
  };
  holidayCardsComponent = HolidayCardsComponent;
}

@Injectable({ providedIn: 'root', useClass: DefaultHolidayConfig })
export abstract class HolidayConfig {
  abstract cardConfig: HolidayCardConfig;
  abstract holidayCardsComponent: Type<HolidayCardsComponentInterface>;
}
