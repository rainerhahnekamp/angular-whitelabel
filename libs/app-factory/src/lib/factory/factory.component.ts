import { Component } from '@angular/core';
import { Config } from '@eternal/shared/config';

@Component({
  selector: 'eternal-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent {
  constructor(public config: Config) {}
}
