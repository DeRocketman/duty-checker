import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {DutyElementService} from "../../../service/duty-element.service";
import {DutyElement} from "../../../shared/duty-element";
import {ErrorStateMatcher} from "@angular/material/core";

export class DutyElementMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'dutch-element-view',
  templateUrl: './element-view.component.html',
  styleUrls: ['./element-view.component.scss']
})
export class ElementViewComponent implements OnInit {
  dutyElementFormGroup: FormGroup;
  displayedColumns: string[] = ["name", "descriptionName" ,"defaultDuration","placeChangeAllowed"]
  displayedHeader: string[] = ["Name", "Name in Beschreibung", "Standardzeit","Ortswechsel"]
  dutyElementList: DutyElement[] = [];
  matcher = new DutyElementMatcher();
  constructor(
    private fb: FormBuilder,
    private dutyElementService: DutyElementService
  ) {
    this.dutyElementFormGroup = this.fb.group({
      id: ["to-create"],
      name: ["", Validators.required],
      descriptionName: ["", Validators.required],
      defaultDuration: ["00:00", Validators.required],
      placeChangeAllowed: [false]
    })
  }
  ngOnInit(): void {
    this.getUpdatedList();
  }
  editElement(row: DutyElement) {
    this.dutyElementFormGroup.patchValue(row);
  }

  deleteElement(data: DutyElement) {
    if (data.id != "to-create" && data.id) {
      this.dutyElementService.delete(data.id).subscribe(
        this.ngOnInit
      )
    }
  }
  submitDutyElementFormData(data: DutyElement): void {
      if (data.id == "to-create" || data.id == undefined) {
        data.id = undefined
        this.dutyElementService.create(data).subscribe(
          () => this.getUpdatedList()
        );
      } else {
        this.dutyElementService.update(data).subscribe(
          () => this.getUpdatedList
        )
      }
  }
  getUpdatedList(): void{
    this.dutyElementService.getAll().subscribe(
      data => this.dutyElementList = data
    )
  }
}
