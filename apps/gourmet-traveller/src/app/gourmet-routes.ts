import { createDefaultRoutes } from '@eternal/app-factory';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';

export const routes: Routes = createDefaultRoutes(HomeComponent);

routes[0].children = routes[0].children?.map((route) => {
  if (route.path !== 'customer') {
    return route;
  }
  return {
    ...route,
    loadChildren: () =>
      import('@eternal/gourmet/restaurants').then(
        (esm) => esm.GourmetRestaurantsModule
      ),
  };
});
