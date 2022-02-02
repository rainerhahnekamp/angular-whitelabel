import { Component } from '@angular/core';
import { Customer } from '@eternal/customer/model';
import { Store } from '@ngrx/store';
import { CustomerActions } from '../../../data/src/lib/customer.actions';

@Component({
  selector: 'eternal-add-customer',
  template: ` <eternal-customer
    [customer]="customer"
    (save)="submit($event)"
  ></eternal-customer>`,
})
export class AddCustomerComponent {
  customer: Customer = {
    id: 0,
    firstname: '',
    name: '',
    country: '',
    birthdate: '',
  };

  constructor(private store: Store) {}

  submit(customer: Customer) {
    this.store.dispatch(
      CustomerActions.add({ customer: { ...customer, id: 0 } })
    );
  }
}
