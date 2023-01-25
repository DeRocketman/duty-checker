import { Component, OnInit } from '@angular/core';
import {WeekSetOfRules} from "../../../shared/week-set-of-rules";

@Component({
  selector: 'dutch-rule-set-create',
  templateUrl: './rule-set-create.component.html',
  styleUrls: ['./rule-set-create.component.scss']
})
export class RuleSetCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createRuleSet(ruleSet: WeekSetOfRules): void {
    console.log(ruleSet);
  }
}
