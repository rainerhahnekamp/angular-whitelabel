import { Injectable, Type } from "@angular/core";
import { HolidayCardConfig } from "./holiday-card-config";
import { HolidayCardsComponentInterface } from "./holiday-card-component.interface";
import { HolidayCardsComponent } from "./holiday-cards.component";

@Injectable()
class DefaultHolidayConfig implements HolidayConfig {
  cardConfig: HolidayCardConfig = {
    showMoreInfo: false,
    showDescription: true,
    bookPlacement: 'bottom',
  };
  cardComponent = HolidayCardsComponent
}

@Injectable({ providedIn: 'root', useClass: DefaultHolidayConfig })
export abstract class HolidayConfig {
  abstract cardConfig: HolidayCardConfig;
  abstract cardComponent: Type<HolidayCardsComponentInterface>;
}
