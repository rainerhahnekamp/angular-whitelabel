import { HolidaysService as IDishesService } from "../../../../libs/holidays/src/lib/holidays.service";
import { Holiday } from "../../../../libs/holidays/src/lib/holiday";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

const dishes = [
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

@Injectable()
export class DishesService implements IDishesService {
  findAll(): Observable<Holiday[]> {
    return of(dishes.sort((d1, d2) => d1.title.localeCompare(d2.title)))
  }

}
