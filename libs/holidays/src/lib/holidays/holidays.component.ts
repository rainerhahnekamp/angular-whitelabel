import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';
import { HolidayConfig } from './holiday-config';
import { WebComponentLoader } from './web-component-loader.service';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  @ViewChild('uiCard', { read: ViewContainerRef, static: true }) uiCard:
    | ViewContainerRef
    | undefined;

  inputs: { holidays: string[] } = { holidays: [] };
  outputs = {
    holidaySelected: (holiday: Holiday) =>
      console.log(`You selected ${holiday.title}`),
  };

  constructor(
    private holidayService: HolidaysService,
    public config: HolidayConfig,
    private cfr: ComponentFactoryResolver,
    private wcLoader: WebComponentLoader
  ) {
    this.wcLoader.load('/assets/holiday-card.js');
    this.holidayService
      .findAll()
      .subscribe(
        (holidays) =>
          (this.inputs.holidays = holidays.map((holiday) =>
            JSON.stringify(holiday)
          ))
      );
  }
}
