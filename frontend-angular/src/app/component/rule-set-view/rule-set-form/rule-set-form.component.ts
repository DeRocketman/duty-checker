import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {WeekSetOfRules} from "../../../shared/week-set-of-rules";
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {SetOfRules} from "../../../shared/set-of-rules";
import {BreakTimeRule} from "../../../shared/break-time-rule";
import {ErrorStateMatcher} from "@angular/material/core";

export class DutyElementMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'dutch-rule-set-form',
  templateUrl: './rule-set-form.component.html',
  styleUrls: ['./rule-set-form.component.scss']
})
export class RuleSetFormComponent implements OnChanges {
  ruleSetFormGroup: FormGroup;
  @Input() ruleSet?: WeekSetOfRules;
  @Output() submitRuleSet = new EventEmitter<WeekSetOfRules>();

  constructor(private fb: FormBuilder) {
    this.ruleSetFormGroup = this.fb.group({
      id: ["to-create"],
      name: ["", Validators.required],
      setOfRulesWeekList: this.fb.array([])
    })
    this.addSetOfRules();
    this.addBreakTimeRules(0);
  }

  ngOnChanges(): void {
    if (this.ruleSet) {
      this.setFormValues(this.ruleSet);
    }
  }
  private setFormValues(wsor: WeekSetOfRules) {
    this.ruleSetFormGroup.patchValue(wsor);
  }

  get setOfRulesWeekList() : FormArray {
    return this.ruleSetFormGroup.get("setOfRulesWeekList") as FormArray
  }

  get workingTimeSet(): FormGroup {
    return this.ruleSetFormGroup.get("workingTimeSet") as FormGroup
  }

  getBreakTimeRules(index: number): FormArray {
    return this.setOfRulesWeekList.at(index).get("breakTimeSet")?.get("breakTimeRules") as FormArray;
  }

  newSetOfRules(): FormGroup {
    return this.fb.group({
      id: ["to-create"],
      name: ["", Validators.required],
      validMonday: [true],
      validTuesday: [true],
      validWednesday: [true],
      validThursday: [true],
      validFriday: [true],
      validSaturday: [true],
      validSunday: [true],
      breakTimeSet: this.fb.group({
        id: ["to-create"],
        shortBreakTimeMin: ["00:10", Validators.required],
        shortBreakTimeMax: ["00:14", Validators.required],
        shortBreakTimeCount: [1, Validators.required],
        breakTimeMin: ["00:15", Validators.required],
        breakTimeMax: ["00:45", Validators.required],
        startMainBreakLocation: [33],
        endMainBreakLocation: [66],
        breakTimeRules: this.fb.array([])
      }),
      workingTimeSet: this.fb.group({
        id: ["to-create"],
        payedTimeMin: ["06:00", Validators.required],
        payedTimeMax: ["10:00", Validators.required],
        bruttoTimeMin: ["06:00", Validators.required],
        bruttoTimeMax: ["10:45", Validators.required],
        drivingTimeMax: ["09:30", Validators.required],
      })
    });
  }
  addSetOfRules(): void {
    this.setOfRulesWeekList.push(this.newSetOfRules());
  }

  removeSetOfRules(index: number) {
    this.setOfRulesWeekList.removeAt(index);
  }

 newBreakTimeRules(): FormGroup {
    return this.fb.group({
      id: ["to-create"],
      startWorkingTime: ["06:01", Validators.required],
      endWorkingTime: ["09:30", Validators.required],
      sumBreakTime: ["00:30", Validators.required]
    });
  }

  addBreakTimeRules(index: number): void {
    this.getBreakTimeRules(index).push(this.newBreakTimeRules());
  }

  removeBreakTimeRules(setIndex: number, breakTimeIndex: number) {
    this.getBreakTimeRules(setIndex).removeAt(breakTimeIndex);
  }

  onSubmit(ruleSet: WeekSetOfRules) {

    this.submitRuleSet.emit(ruleSet);
  }

}
