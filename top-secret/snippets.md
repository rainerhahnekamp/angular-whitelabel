- [White-Label](#white-label)
  - [Config](#config)
  - [SCSS](#scss)
  - [Restaurant Routing](#restaurant-routing)
- [Customization](#customization)
  - [FoodsService](#foodsservice)
  - [Generic UI Approach](#generic-ui-approach)
  - [Holiday as ViewContainerRef](#holiday-as-viewcontainerref)
  - [Template Outlet approach with `ng-dynamic-component`](#template-outlet-approach-with-ng-dynamic-component)
  - [Web Components](#web-components)

# White-Label

## Config

```typescript
new Config(
  'Top Austrian Food',
  'gourmet-traveller',
  environment.baseUrl,
  environment.authUrl,
  { diaryEnabled: false, customerEnabled: false, holidaysEnabled: true }
);
```

## SCSS

```scss
@import 'node_modules/@angular/material/prebuilt-themes/pink-bluegrey.css';

html,
body {
  height: 100%;
  background: lightgrey;
}

.primary-bg,
.mat-drawer {
  background: grey;
}
```

## Restaurant Routing

```typescript
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
```

# Customization

## FoodsService

```typescript
const foods = [
  {
    id: 1,
    title: 'Tafelspitz',
    teaser: 'beef at its best',
    description:
      'Tafelspitz is boiled veal or beef in broth, served with a mix of minced apples and horseradish. It is a classic dish of the Viennese cuisine and popular in all of Austria and the neighboring German state of Bavaria.',
    imageUrl: 'assets/Tafelspitz.jpg',
    typeId: 1,
    durationInDays: 3,
    minCount: 5,
    maxCount: 12,
  },
  {
    id: 5,
    title: 'Palatschinken',
    teaser: 'Sweet lunch',
    description:
      "Although it is very sweet and might be identified as dessert on the first look, it isn't. It is a full lunch and will fill up even the most empty stomach. Don't order it in Germany. They don't know what this is 😉",
    imageUrl: 'assets/Palatschinken.jpg',
    typeId: 1,
    durationInDays: 3,
    minCount: 5,
    maxCount: 12,
  },
  {
    id: 2,
    title: 'Wiener Schnitzel',
    teaser: 'Traditional Lunch',
    description:
      'Wiener schnitzel, sometimes spelled Wienerschnitzel, as in Switzerland, is a type of schnitzel made of a thin, breaded, pan-fried veal cutlet. It is one of the best known specialities of Viennese cuisine, and one of the national dishes of Austria.',
    imageUrl: 'assets/WienerSchnitzel.jpg',
    typeId: 1,
    durationInDays: 3,
    minCount: 5,
    maxCount: 12,
  },
  {
    id: 3,
    title: 'Kardinalschnitte',
    teaser: 'Something for the dessert?',
    description:
      'The Cardinal Slices are a popular dessert of the Viennese cuisine and taste divine – in the truest sense of the word. In fact, the name of the Viennese delicacy results from its visual appearance. The sponge mixture in combination with beaten egg whites corresponds perfectly to the colors of the Catholic Church – yellow and white. Don’t hesitate to taste a piece of this heavenly pleasure!',
    imageUrl: 'assets/Kardinalschnitte.jpg',
    typeId: 1,
    durationInDays: 3,
    minCount: 5,
    maxCount: 12,
  },
  {
    id: 4,
    title: 'Gulasch',
    teaser: 'Solid lunch',
    description:
      "Officially definied as a soup, it is the complete opposite. You don't need anything else after you are finished with Gulasch. Different variations are possible.",
    imageUrl: 'assets/Gulasch.jpg',
    typeId: 1,
    durationInDays: 3,
    minCount: 5,
    maxCount: 12,
  },
  {
    id: 6,
    title: 'Würstel mit Senf',
    teaser: 'The quickie ',
    description:
      "If it is very late at night, if you had too much for breakfast, it dosn't matter when. Würstel mit Senf as snack always works.",
    imageUrl: 'assets/WürstelmitSenf.jpg',
    typeId: 1,
    durationInDays: 3,
    minCount: 5,
    maxCount: 12,
  },
];
```

## Generic UI Approach

**holiday-card.component.ts**

```typescript
@Component({
  selector: 'eternal-holiday-card',
  template: `<mat-card *ngIf="holiday">
    <mat-card-header>
      <mat-card-title>{{ holiday.title }}</mat-card-title>
      <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
    </mat-card-header>
    <img mat-card-image [src]="holiday.imageUrl" [alt]="holiday.title" />
    <mat-card-content>
      {{ holiday.description }}
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button>{{ 'holidays.book' | transloco }}</button>
    </mat-card-actions>
  </mat-card>`,
})
export class HolidayCardComponent {
  @Input() holiday: Holiday | undefined;
}
```

**holiday-card-config.ts**

```typescript
export interface HolidayCardConfig {
  bookPlacement: 'top' | 'bottom';
  showMoreInfo: boolean;
  showDescription: boolean;
}
```

**holiday-card.component.ts (Generelized)**

```typescript
@Component({
  selector: 'eternal-holiday-card',
  template: `<mat-card *ngIf="holiday && config">
    <mat-card-header>
      <mat-card-title>{{ holiday.title }}</mat-card-title>
      <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
      <button *ngIf="config.bookPlacement === 'top'" mat-raised-button>
        {{ 'holidays.book' | transloco }}
      </button>
    </mat-card-header>
    <img mat-card-image [src]="holiday.imageUrl" [alt]="holiday.title" />
    <mat-card-content *ngIf="config.showDescription">
      {{ holiday.description }}
    </mat-card-content>
    <mat-card-actions>
      <button *ngIf="config.bookPlacement === 'bottom'" mat-raised-button>
        {{ 'holidays.book' | transloco }}
      </button>
      <button *ngIf="config.showMoreInfo" mat-raised-button>More Info</button>
    </mat-card-actions>
  </mat-card>`,
})
export class HolidayCardComponent {
  @Input() holiday: Holiday | undefined;
  @Input() config: HolidayCardConfig | undefined;
}
```

**holiday-config.ts**

```typescript
import { Injectable } from '@angular/core';
import { HolidayCardConfig } from './holiday-card.component';

@Injectable()
class DefaultHolidayConfig implements HolidayConfig {
  cardConfig: HolidayCardConfig = {
    showMoreInfo: false,
    showDescription: true,
    bookPlacement: 'bottom',
  };
}

@Injectable({ providedIn: 'root', useClass: DefaultHolidayConfig })
export abstract class HolidayConfig {
  abstract cardConfig: HolidayCardConfig;
}
```

## Holiday as ViewContainerRef

**holiday-cards-component.interface.ts**

```typescript
import { Holiday } from '../holiday';
import { EventEmitter } from '@angular/core';

export interface HolidayCardsComponentInterface {
  holidays: Holiday[];
  holidaySelected: EventEmitter<Holiday>;
}
```

**holiday-cards-loader.service.ts**

```typescript
@Injectable({ providedIn: 'root' })
export class HolidayCardsLoader {
  constructor(
    private cfr: ComponentFactoryResolver,
    private config: HolidayConfig
  ) {}

  load(
    viewContainerRef: ViewContainerRef
  ): ComponentRef<HolidayCardsComponentInterface> {
    const component = this.cfr.resolveComponentFactory(
      this.config.holidayCardsComponent
    );
    viewContainerRef.clear();
    return viewContainerRef.createComponent<HolidayCardsComponentInterface>(
      component
    );
  }
}
```

**holiday-cards.component.ts**

```typescript
@Component({
  styles: [
    `
      div {
        display: flex;
        margin: 2em;
        justify-content: space-between;
      }

      mat-card {
        max-width: 250px;
      }
    `,
  ],
  template: ` <div>
    <mat-card *ngFor="let holiday of holidays">
      <mat-card-header>
        <mat-card-title>{{ holiday.title }}</mat-card-title>
        <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="holiday.imageUrl" [alt]="holiday.title" />
      <mat-card-content>
        {{ holiday.description }}
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button (click)="holidaySelected.emit(holiday)">
          More Info
        </button>
      </mat-card-actions>
    </mat-card>
  </div>`,
})
export class HolidayCardsComponent implements HolidayCardsComponentInterface {
  @Input() holidays: Holiday[] = [];
  @Output() holidaySelected = new EventEmitter<Holiday>();
}
```

**holidays.component.ts**

```typescript
export class HolidaysComponent implements OnInit {
  @ViewChild('uiCard', { read: ViewContainerRef, static: true })
  uiCard: ViewContainerRef | undefined;

  constructor(
    private holidayService: HolidaysService,
    public holidayConfig: HolidayConfig,
    private holidayCardLoader: HolidayCardLoader
  ) {}

  ngOnInit(): void {
    if (!this.uiCard) {
      throw new Error('uiCard container not available');
    }
    const componentRef = this.holidayCardLoader.load(this.uiCard);
    componentRef.instance.holidaySelected
      .asObservable()
      .subscribe((holiday) => {
        console.log('Thanks for booking ' + holiday.title);
      });
    this.holidayService.findAll().subscribe((holidays) => {
      componentRef.instance.holidays = holidays;
    });
  }
}
```

**dishes.component.ts**

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Holiday } from '../../../../libs/holidays/src/lib/holiday';
import { HolidayCardsComponentInterface } from '../../../../libs/holidays/src/lib/holidays/holiday-cards-component.interface';

@Component({
  styles: [
    `
      img {
        max-width: 250px;
        height: auto;
      }
    `,
  ],
  template: `<div class="container">
    <div *ngFor="let dish of holidays">
      <h3>{{ dish.title }}</h3>
      <p>{{ dish.teaser }}</p>
      <img [src]="dish.imageUrl" [alt]="dish.title" />
      <button (click)="holidaySelected.emit(dish)">Eat me</button>
    </div>
  </div>`,
})
export class DishesComponent implements HolidayCardsComponentInterface {
  @Output() holidaySelected = new EventEmitter<Holiday>();
  @Input() holidays: Holiday[] = [];
}
```

## Template Outlet approach with `ng-dynamic-component`

**holidays.component.html**

```html
<ndc-dynamic
  *ngIf="inputs$ | async as inputs"
  [ndcDynamicComponent]="holidayConfig.holidayCardsComponent"
  [ngComponentOutletNdcDynamicInputs]="inputs"
  [ngComponentOutletNdcDynamicOutputs]="outputs"
></ndc-dynamic>
```

## Web Components

**web-component-loader.service.ts**

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebComponentLoader {
  loaded = new Set<string>();

  load(url: string): void {
    if (this.loaded.has(url)) {
      return;
    }
    this.loaded.add(url);

    const script = document.createElement('script');
    script.src = url;
    document.head.append(script);
  }
}
```

**dish-card.js**

```javascript
class HolidayCard extends HTMLElement {
  container = document.createElement('div');
  image = document.createElement('img');
  button = document.createElement('button');

  constructor() {
    super();
    this.button.textContent = 'Eat';
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.container.append(this.image, this.button);
    const style = document.createElement('style');
    style.textContent = 'img { max-width: 250px; height: auto; }';
    shadowRoot.append(style, this.container);

    this.button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('holidaySelected', this.holiday));
    });
  }

  static observedAttributes = ['holiday'];

  attributeChangedCallback(name, oldValue, newValue) {
    const holiday = JSON.parse(newValue);
    this.image.src = holiday.imageUrl;
    this.holiday = holiday;
  }
}

customElements.define('holiday-card', HolidayCard);
```

**holiday-card.js**

```javascript
class HolidayCard extends HTMLElement {
  container = document.createElement('div');
  h3 = document.createElement('h3');
  teaser = document.createElement('p');
  image = document.createElement('img');
  button = document.createElement('button');

  constructor() {
    super();
    this.button.textContent = 'Book';
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.container.append(this.h3, this.teaser, this.image, this.button);
    const style = document.createElement('style');
    style.textContent = 'img { max-width: 250px; height: auto; }';
    shadowRoot.append(style, this.container);

    this.button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('holidaySelected', this.holiday));
    });
  }

  static observedAttributes = ['holiday'];

  attributeChangedCallback(name, oldValue, newValue) {
    const holiday = JSON.parse(newValue);
    this.h3.textContent = holiday.title;
    this.teaser = holiday.description;
    this.image.src = holiday.imageUrl;
    this.holiday = holiday;
  }
}

customElements.define('holiday-card', HolidayCard);
```
