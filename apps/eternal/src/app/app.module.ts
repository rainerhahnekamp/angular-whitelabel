import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-AT';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  defaultModules,
  defaultProviders,
  defaultRoutes,
} from '@eternal/app-shell';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

registerLocaleData(localeDe, 'de-AT');

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    ...defaultModules,
    RouterModule.forRoot(defaultRoutes),
  ],
  providers: [defaultProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
