import { Component, OnInit } from '@angular/core';
import {TravelTime} from "../../../shared/travel-time";
import {Place} from "../../../shared/place";
import {PlaceService} from "../../../service/place.service";
import {TravelTimeService} from "../../../service/travel-time.service";
import {DutyElement} from "../../../shared/duty-element";
import {DutyElementService} from "../../../service/duty-element.service";

@Component({
  selector: 'dutch-basic-data-main-view',
  templateUrl: './basic-data-main-view.component.html',
  styleUrls: ['./basic-data-main-view.component.scss']
})
export class BasicDataMainViewComponent implements OnInit {
  placeList: Place[] = []
  travelTimeList: TravelTime[] = []

  constructor(
    private placeService: PlaceService,
    private travelTimeService: TravelTimeService,
    private dutyElementService: DutyElementService,
  ) { }
  ngOnInit(): void {
    this.placeService.getAll().subscribe(data => {
      this.placeList = data;
    });
  }
  ngOnChanges(): void {
    this.placeService.getAll().subscribe(data => {
      this.placeList = data;
    });
  }
  updatePlaceList($event: Place): void {
    if ($event.id === "to-create" || !$event.id) {
      $event.id = undefined;
      this.placeService.create($event).subscribe(
        (res) => {
          console.log(res);
        }
      )
    } else {
      this.placeService.update($event).subscribe(
        (res) => console.log(res)
      )
    }
  }

  updateTravelTimeList($event: TravelTime): void {
    if ($event.id === "to-create" || !$event.id) {
      $event.id = undefined;
      this.travelTimeService.create($event).subscribe(
        (res) => {
          console.log(res);
        }
      )
    } else {
      this.travelTimeService.update($event).subscribe(
        (res) => console.log(res),
        (e) => console.log(e)
      )
    }
  }

  updateDutyElementList($event: DutyElement): void {
    if ($event.id === "to-create" || !$event.id) {
      $event.id = undefined;
      this.dutyElementService.create($event).subscribe(
        (res) => {
          console.log(res);
        }
      )
    } else {
      this.travelTimeService.update($event).subscribe(
        (res) => console.log(res),
        (e) => console.log(e)
      )
    }
  }

}
