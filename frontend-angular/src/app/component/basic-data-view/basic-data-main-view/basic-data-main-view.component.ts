import { Component, OnInit } from '@angular/core';
import {TravelTime} from "../../../shared/travel-time";
import {Place} from "../../../shared/place";
import {PlaceService} from "../../../service/place.service";
import {TravelTimeService} from "../../../service/travel-time.service";

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
    this.ngOnChanges()
  }

  updateTravelTimeList($event: TravelTime): void {
    console.log($event);
    if ($event.id === "to-create" || !$event.id) {
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
    this.ngOnChanges()
  }

}
