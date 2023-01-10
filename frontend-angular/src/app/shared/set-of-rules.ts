import {BreakTimeSet} from "./break-time-set";
import {WorkingTimeSet} from "./working-time-set";

export interface SetOfRules {
  id?: string,
  name?: string,
  breakTimeSet?: BreakTimeSet,
  workingTimeSet?: WorkingTimeSet,
}
