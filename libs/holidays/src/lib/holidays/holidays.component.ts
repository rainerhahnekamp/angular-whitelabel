import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { holidays } from '../data';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent {
  constructor(private holidayService: HolidaysService) {}
  holidays$: Observable<Holiday[]> = this.holidayService.findAll();
}
