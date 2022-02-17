import { Component, OnInit } from '@angular/core';
import { Config } from '@eternal/shared/config';

@Component({
  selector: 'eternal-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(public config: Config) {}

  ngOnInit(): void {}
}
