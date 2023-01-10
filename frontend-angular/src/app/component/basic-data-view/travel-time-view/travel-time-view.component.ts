import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TravelTime} from "../../../shared/travel-time";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PlaceService} from "../../../service/place.service";
import {TravelTimeService} from "../../../service/travel-time.service";
import {Place} from "../../../shared/place";

@Component({
  selector: 'dutch-travel-time-view',
  templateUrl: './travel-time-view.component.html',
  styleUrls: ['./travel-time-view.component.scss']
})
export class TravelTimeViewComponent implements OnChanges {
  displayedColumns: string[] = ["startPoint", "endPoint", "duration", "type","oppoDirectionEquals"]
  displayedHeader: string[] = ["Start", "Ziel", "Dauer", "Typ", "Gegenrichtung identisch"]
  travelTimeTypes: string[] = ["Wegezeit","Gastfahrt inkl. Einsicht in Unterlagen", "Rangierfahrt.", "Rangierfahrt"]
  travelTimeFormGroup: FormGroup;
  travelTimeList: TravelTime[] = []
  @Input() placeList: Place[] = [];
  @Output() submitTravelTime = new EventEmitter<TravelTime>()
  constructor(
    private fb : FormBuilder,
    private placeService : PlaceService,
    private travelTimeService : TravelTimeService
  ) {
    this.travelTimeFormGroup = fb.group({
      id: ["to-create"],
      startPoint: [],
      endPoint: [],
      duration: ["00:01"],
      type: [],
      oppoDirectionEquals: [false]
    });
  }
  ngOnChanges(): void {
    this.placeService.getAll().subscribe(res => this.placeList = res);
    this.travelTimeService.getAll().subscribe(res => this.travelTimeList = res);
  }
  submitTravelTimeFormData(formData: TravelTime): void {
    this.submitTravelTime.emit(formData);
    this.travelTimeFormGroup.reset();
  }
  editTravelTime(row: TravelTime): void {
    this.travelTimeFormGroup.patchValue(row)
  }
}
