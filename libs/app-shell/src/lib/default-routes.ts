import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const defaultRoutes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
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
