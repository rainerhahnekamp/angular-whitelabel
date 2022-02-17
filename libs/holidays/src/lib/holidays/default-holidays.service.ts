import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { holidays } from '../data';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';

@Injectable()
export class DefaultHolidaysService implements HolidaysService {
  findAll(): Observable<Holiday[]> {
    return of(holidays);
  }
}
