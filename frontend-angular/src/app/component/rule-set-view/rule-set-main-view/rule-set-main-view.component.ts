import { Component, OnInit } from '@angular/core';
import {WeekSetOfRulesService} from "../../../service/week-set-of-rules.service";
import {WeekSetOfRules} from "../../../shared/week-set-of-rules";

@Component({
  selector: 'dutch-rule-set-main-view',
  templateUrl: './rule-set-main-view.component.html',
  styleUrls: ['./rule-set-main-view.component.scss']
})
export class RuleSetMainViewComponent implements OnInit {
  displayedColumns: string[] = ["name","validDays", "payedTime", "bruttoTime", "drivingTimeMax", "shortBreakTime",
    "shortBreakCount", "breakTime", "mainBreakLocation", "breakTimeRulesLength"]
  weekSetOfRulesList: WeekSetOfRules[] = [];
  constructor(private weekSetOfRulesService: WeekSetOfRulesService) { }

  ngOnInit(): void {
    this.weekSetOfRulesService.getAll().subscribe(
      (res) => this.weekSetOfRulesList = res
    )
  }

}
