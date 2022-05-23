import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { HolidaysService } from '../holidays.service';
import { HolidayConfig } from './holiday-config';
import { HolidayCardsLoader } from './holiday-cards-loader.service';
import { Holiday } from '../holiday';
import { map, Observable } from 'rxjs';
import { WebComponentLoader } from './web-component-loader.service';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  @ViewChild('uiCard', { read: ViewContainerRef, static: true })
  uiCard: ViewContainerRef | undefined;
  holidays$: Observable<string[]>;
  outputs = {
    holidaySelected: (holiday: Holiday) =>
      console.log(`You selected ${holiday.title}`),
  };

  constructor(
    private holidayService: HolidaysService,
    public holidayConfig: HolidayConfig,
    private holidayCardsLoader: HolidayCardsLoader,
    private webComponentLoader: WebComponentLoader
  ) {
    webComponentLoader.load('/assets/holiday-card.js');
    this.holidays$ = this.holidayService
      .findAll()
      .pipe(
        map((holidays) => holidays.map((holiday) => JSON.stringify(holiday)))
      );
  }

  // ngOnInit(): void {
  //   if (!this.uiCard) {
  //     throw new Error('uiCard container not available');
  //   }
  //   const componentRef = this.holidayCardsLoader.load(this.uiCard);
  //   componentRef.instance.holidaySelected
  //     .asObservable()
  //     .subscribe((holiday) => {
  //       console.log('Thanks for booking ' + holiday.title);
  //     });
  //   this.holidayService.findAll().subscribe((holidays) => {
  //     componentRef.instance.holidays = holidays;
  //   });
  // }
  handleHolidaySelected($event: any) {
    console.log($event);
  }
}
