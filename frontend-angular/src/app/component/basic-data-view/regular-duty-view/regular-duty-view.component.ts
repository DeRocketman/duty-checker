import { Component, OnInit } from '@angular/core';
import {Duty} from "../../../shared/duty";
import {DutyService} from "../../../service/duty.service";
import {HttpClient} from "@angular/common/http";

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
    let file = e.target.files[0];
    console.log(file)
    // @ts-ignore
    let reader : FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      let csv: any = reader.result;
      let allTextLines = csv.split(/\r\n|\n/)
      let headers = allTextLines[0].split(";")
      console.log(headers)

      let dutyData = [];

      let rows = [];
      for(let i = 1; i < allTextLines.length; i++){
        rows.push(allTextLines[i].split(';'));
      }
      console.log(rows);
      for (let j = 0; j < allTextLines.length; j++) {
        dutyData.push(rows[j]);
      }
      for (let i = 0; i<dutyData.length-1; i++) {
        let descriptionArray = dutyData[i];
        for (let j = 0; j<descriptionArray.length; j++) {
          // TODO: Do somthing with Data
        }
      }
    }
  }
}
