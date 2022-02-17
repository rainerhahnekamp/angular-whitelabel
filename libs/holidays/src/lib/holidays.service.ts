import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from './holiday';
import { DefaultHolidaysService } from './holidays/default-holidays.service';

@Injectable({ useClass: DefaultHolidaysService, providedIn: 'root' })
export abstract class HolidaysService {
  abstract findAll(): Observable<Holiday[]>;
}
