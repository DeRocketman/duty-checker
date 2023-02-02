import { Component, OnInit } from '@angular/core';
import {WeekSetOfRules} from "../../../shared/week-set-of-rules";
import {WeekSetOfRulesService} from "../../../service/week-set-of-rules.service";

@Component({
  selector: 'dutch-rule-set-create',
  templateUrl: './rule-set-create.component.html',
  styleUrls: ['./rule-set-create.component.scss']
})
export class RuleSetCreateComponent implements OnInit {
  constructor(
    private weekSetOfRulesService: WeekSetOfRulesService
  ) { }

  ngOnInit(): void {
  }

  createRuleSet(ruleSet: WeekSetOfRules): void {
    ruleSet.id = undefined;
    if (ruleSet.setOfRulesWeekList) {
      for (let setOfRules of ruleSet.setOfRulesWeekList) {
        setOfRules.id = undefined;
        if (setOfRules.breakTimeSet) {
          setOfRules.breakTimeSet.id = undefined;
          if (setOfRules.breakTimeSet.breakTimeRules) {
            for (let breakTimeRule of setOfRules.breakTimeSet.breakTimeRules) {
              breakTimeRule.id = undefined;
            }
          }
        }
        if (setOfRules.workingTimeSet) {
          setOfRules.workingTimeSet.id = undefined;
        }
      }
    }
    this.weekSetOfRulesService.create(ruleSet).subscribe(
      res => console.log(res)
    )
  }
}
