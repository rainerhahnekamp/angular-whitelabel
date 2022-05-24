import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';
import { HolidayConfig } from './holiday-config';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  constructor(
    private holidayService: HolidaysService,
    public config: HolidayConfig
  ) {}
  holidays$: Observable<Holiday[]> = this.holidayService.findAll();
}
