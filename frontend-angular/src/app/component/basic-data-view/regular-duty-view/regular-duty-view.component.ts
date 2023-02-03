import { Component, OnInit } from '@angular/core';
import {Duty} from "../../../shared/duty";
import {DutyService} from "../../../service/duty.service";

@Component({
  selector: 'dutch-regular-duty-view',
  templateUrl: './regular-duty-view.component.html',
  styleUrls: ['./regular-duty-view.component.scss']
})
export class RegularDutyViewComponent implements OnInit {
  displayedColumns: string[] = ["name", "startTime", "endTime", "breakTime", "payedTime", "totalTime", "dutyListLength"]
  headerColumns: string[] = ["Name", "Dienstbeginn", "Dienstende", "Pausenlänge", "Bezahlte Zeit", "Brutto Zeit", "Anzahl d. Beschr."]
  regularDuties: Duty[] = [];

  constructor(private dutyService: DutyService) { }

  ngOnInit(): void {
    this.dutyService.getAll().subscribe(
      res => this.regularDuties = res
    );
  }

  importRegularDuties(e: any): void {

  }
}
