import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { HolidayConfig } from './holiday-config';
import { HolidayCardsComponentInterface } from './holiday-cards-component.interface';

@Injectable({ providedIn: 'root' })
export class HolidayCardsLoader {
  constructor(
    private cfr: ComponentFactoryResolver,
    private config: HolidayConfig
  ) {}

  load(
    viewContainerRef: ViewContainerRef
  ): ComponentRef<HolidayCardsComponentInterface> {
    const component = this.cfr.resolveComponentFactory(
      this.config.holidayCardsComponent
    );
    viewContainerRef.clear();
    return viewContainerRef.createComponent<HolidayCardsComponentInterface>(
      component
    );
  }
}
