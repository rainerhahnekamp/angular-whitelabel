import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
import { Holiday } from "../holiday";
import { HolidaysService } from "../holidays.service";
import { HolidayConfig } from "./holiday-config";

@Component({
  selector: 'eternal-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss'],
})
export class HolidaysComponent implements OnInit{
  @ViewChild("uiCard", {read: ViewContainerRef, static: true}) uiCard: ViewContainerRef | undefined;
  constructor(private holidayService: HolidaysService, public config: HolidayConfig, private cfr: ComponentFactoryResolver) {}
  holidays$: Observable<Holiday[]> = this.holidayService.findAll();
  inputs: {holidays: Holiday[]} = {holidays: []};
  outputs = {holidaySelected: (holiday: Holiday) => console.log("you clicked on " + holiday.title)};

  ngOnInit(): void {
    // if (this.uiCard === undefined) {
    //   throw new Error("uiCard not available")
    // }
    // const component = this.cfr.resolveComponentFactory(this.config.cardComponent);
    // this.uiCard.clear();
    // const componentRef = this.uiCard.createComponent<HolidayCardsComponentInterface>(component);
    //
    // this.holidayService.findAll().subscribe(holidays => {
    //   componentRef.instance.holidays = holidays;
    //
    // })

    this.holidayService.findAll().subscribe(holidays => {
      this.inputs.holidays = holidays;
    })
  }
}
