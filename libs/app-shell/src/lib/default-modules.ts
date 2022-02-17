import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppShellModule } from './app-shell.module';

export const defaultModules = [
  BrowserAnimationsModule,
  AppShellModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  StoreModule.forRoot({}),
  EffectsModule.forRoot([]),
  ReactiveFormsModule,
  FormlyModule.forRoot({ extras: { lazyRender: true } }),
  FormlyMaterialModule,
];
