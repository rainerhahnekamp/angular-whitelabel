import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays/holidays.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [HolidaysComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: HolidaysComponent,
      },
    ]),
    TranslocoModule,
  ],
})
export class HolidaysModule {}
