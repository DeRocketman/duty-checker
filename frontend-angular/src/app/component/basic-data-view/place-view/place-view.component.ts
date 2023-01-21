import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Place} from "../../../shared/place";
import {PlaceService} from "../../../service/place.service";

export class PlaceErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'dutch-place-view',
  templateUrl: './place-view.component.html',
  styleUrls: ['./place-view.component.scss']
})
export class PlaceViewComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ["externalNumber","name","descriptionName", "signInOut", "longBreak", "shortBreak", "fillUpFuel"]
  displayedHeader: string[] = ["Externe ID","Name","Name in Beschreibung", "An/Abmeldung", "Lange Pause", "Kurze Pause", "Tanken"]

  @Input() placeList: Place[] = [];
  @Output() submitPlaces = new EventEmitter<Place>();
  placeFormGroup: FormGroup;
  matcher = new PlaceErrorStateMatcher();

  constructor(
    private placeService: PlaceService,
    private fb: FormBuilder
  ) {
    this.placeFormGroup= fb.group({
      id: ["to-create"],
      externalNumber: ["", Validators.required],
      name: ["", Validators.required],
      descriptionName: ["", Validators.required],
      signInOut: [false],
      longBreak: [false],
      shortBreak: [false],
      fillUpFuel: [false]
    });
  }
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.placeService.getAll().subscribe(res => this.placeList = res);
  }

  deleteElement(formData: Place) {

  }
  submitPlaceFormData(formData: Place) {
    this.submitPlaces.emit(formData);
    this.placeFormGroup.reset();
  }
  editPlace(row: Place): void {
    this.placeFormGroup.patchValue(row);
  }

}
