import { LOCALE_ID } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

export const defaultProviders = [
  {
    provide: MAT_DATE_LOCALE,
    useValue: 'de-AT',
  },
  { provide: LOCALE_ID, useValue: 'de-AT' },
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'outline' },
  },
];
