import { Component, OnInit } from '@angular/core';
import {DutyCheckResultRow} from "../../../shared/duty-check-result-row";
import {Duty} from "../../../shared/duty";

const ELEMENT_DATA : DutyCheckResultRow[] = [
  {dutyName: "670:F", regularStart: "10:00", regularEnd: "18:30", regularLength: "08:30", newDutyStart: "11:00", startDeviation: "01:00 später", newDutyEnd: "18:30", endDeviation: "00:00", newLength: "07:30", period: "09.10.2023-09.10.2023"},
  {dutyName: "673:F", regularStart: "10:00", regularEnd: "18:30", regularLength: "08:30", newDutyStart: "11:00", startDeviation: "01:00 später", newDutyEnd: "18:30", endDeviation: "00:00", newLength: "07:30", period: "09.10.2023-09.10.2023"},
  {dutyName: "674:F", regularStart: "10:00", regularEnd: "18:30", regularLength: "08:30", newDutyStart: "11:00", startDeviation: "01:00 später", newDutyEnd: "18:30", endDeviation: "00:00", newLength: "07:30", period: "09.10.2023-09.10.2023"},
  {dutyName: "680:F", regularStart: "10:00", regularEnd: "18:30", regularLength: "08:30", newDutyStart: "11:00", startDeviation: "01:00 später", newDutyEnd: "18:30", endDeviation: "00:00", newLength: "07:30", period: "09.10.2023-09.10.2023"},
  {dutyName: "681:F", regularStart: "10:00", regularEnd: "18:30", regularLength: "08:30", newDutyStart: "11:00", startDeviation: "01:00 später", newDutyEnd: "18:30", endDeviation: "00:00", newLength: "07:30", period: "09.10.2023-09.10.2023"}
]
@Component({
  selector: 'dutch-review-result-view',
  templateUrl: './review-result-view.component.html',
  styleUrls: ['./review-result-view.component.scss']
})
export class ReviewResultViewComponent implements OnInit {
  displayedColumns: string[] = ["dutyName", "regularStart", "regularEnd","regularLength", "newDutyStart", "startDeviation", "newDutyEnd", "endDeviation", "newLength", "period"];
  dutyCheckResult : DutyCheckResultRow[] = [];
  dutiesToCheck: Duty[] = [];
  constructor() { }

  ngOnInit(): void {
    this.dutyCheckResult = ELEMENT_DATA;
  }

  showDutyDetails(row: any): void {
    console.log(row.dutyName)
  }
}
