import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const createDefaultRoutes = (home: Type<unknown>): Routes => {
  return [
    {
      path: '',
      component: ShellComponent,
      children: [
        { path: '', component: home },
        {
          path: 'customer',
          loadChildren: () =>
            import('@eternal/customer/feature').then(
              (esm) => esm.CustomerModule
            ),
        },
        {
          path: 'holidays',
          loadChildren: () =>
            import('@eternal/holidays').then((esm) => esm.HolidaysModule),
        },
      ],
    },
  ];
};
