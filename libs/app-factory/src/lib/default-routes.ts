import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { FactoryComponent } from './factory/factory.component';

export const createDefaultRoutes = (home: Type<unknown>): Routes => [
  {
    path: '',
    component: FactoryComponent,
    children: [
      { path: '', component: home },
      {
        path: 'customer',
        loadChildren: () =>
          import('@eternal/customer/feature').then((esm) => esm.CustomerModule),
      },
      {
        path: 'holidays',
        loadChildren: () =>
          import('@eternal/holidays').then((esm) => esm.HolidaysModule),
      },
    ],
  },
];
