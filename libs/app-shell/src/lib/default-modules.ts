import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerModule } from '@eternal/customer/feature';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { HolidaysModule } from '../../../holidays/src/lib/holidays.module';
import { environment } from '../../../../apps/eternal/src/environments/environment';
import { AppShellModule } from './app-shell.module';

export const defaultModules = [
  BrowserAnimationsModule,
  AppShellModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  StoreModule.forRoot({}),
  EffectsModule.forRoot([]),
  !environment.production ? StoreDevtoolsModule.instrument() : [],
  ReactiveFormsModule,
  FormlyModule.forRoot({ extras: { lazyRender: true } }),
  FormlyMaterialModule,
];
