import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';
import {
  HolidayCardsComponentInterface,
  HolidayConfig,
} from './holiday-config';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent implements OnInit {
  @ViewChild('uiCard', { read: ViewContainerRef, static: true }) uiCard:
    | ViewContainerRef
    | undefined;

  constructor(
    private holidayService: HolidaysService,
    public config: HolidayConfig,
    private cfr: ComponentFactoryResolver
  ) {}
  holidays$: Observable<Holiday[]> = this.holidayService.findAll();

  ngOnInit(): void {
    if (this.uiCard === undefined) {
      throw new Error('uiCard not defined');
    }

    const component = this.cfr.resolveComponentFactory(
      this.config.uiCardComponent
    );
    this.uiCard.clear();
    const containerRef =
      this.uiCard.createComponent<HolidayCardsComponentInterface>(component);

    this.holidays$.subscribe(
      (holidays) => (containerRef.instance.holidays = holidays)
    );
    containerRef.instance.holidaySelected
      .asObservable()
      .subscribe((holiday) => console.log(`You clicked on ${holiday.title}`));
  }
}
