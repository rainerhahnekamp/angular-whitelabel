import { Injectable } from '@angular/core';
import { HolidayCardConfig } from './holiday-card.component';

@Injectable()
class DefaultHolidayConfig implements HolidayConfig {
  cardConfig: HolidayCardConfig = {
    showMoreInfo: false,
    showDescription: true,
    bookPlacement: 'bottom',
  };
}

@Injectable({ providedIn: 'root', useClass: DefaultHolidayConfig })
export abstract class HolidayConfig {
  abstract cardConfig: HolidayCardConfig;
}
