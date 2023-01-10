import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckOptions} from "../../../shared/check-options";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CheckOptionsService} from "../../../service/check-options.service";

@Component({
  selector: 'dutch-check-options-view',
  templateUrl: './check-options-view.component.html',
  styleUrls: ['./check-options-view.component.scss']
})
export class CheckOptionsViewComponent implements OnInit {
  @Input() checkOptions?: CheckOptions;

  @Output() submitCheckOptions = new EventEmitter<CheckOptions>();

  checkConfigFormGroup : FormGroup;
  constructor(
    private fb : FormBuilder,
    private checkOptionsService : CheckOptionsService,
  ) {
    this.checkConfigFormGroup = fb.group({
      checkRouteKnowledge: [false],
      checkSignOnOff: [false],
      checkContentTime: [false],
      checkTravelTime: [false],
      checkInspectionDoc: [false],
      checkGap: [false],
      checkWorkingTime: [false],
      checkPlaceUse: [false],
      sendMail: [false],
      showResultBeforeSending: [false],
    })
  }
  ngOnInit(): void {
    if (this.checkOptions) {
      this.setCheckOptionFormValues(this.checkOptions);
    }
  }
  updateCheckOptions(e: any) {
    const id = this.checkOptions ? this.checkOptions.id : "";
    this.checkOptions = {
      ...e,
      id: id,
    }
    if (this.checkOptions) {
      this.checkOptionsService.update(this.checkOptions).subscribe();
    }
    this.submitCheckOptions.emit(this.checkOptions);
  }
  private setCheckOptionFormValues(reqCheckOptions: CheckOptions) {
    this.checkConfigFormGroup.patchValue(reqCheckOptions);
  }

}
