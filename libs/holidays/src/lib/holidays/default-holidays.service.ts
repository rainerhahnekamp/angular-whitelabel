import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Holiday } from '../holiday';
import { HolidaysService } from '../holidays.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DefaultHolidaysService implements HolidaysService {
  constructor(private httpClient: HttpClient) {}
  findAll(): Observable<Holiday[]> {
    return this.httpClient.get<Holiday[]>('/assets/holidays.json');
  }
}
