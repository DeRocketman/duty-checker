import {BreakTimeSet} from "./break-time-set";

export interface BreakTimeRule {
  id?: string,
  startWorkingTime?: string,
  endWorkingTime?: string,
  sumBreakTime?: number,
  breakTimeSet?: BreakTimeSet;
}
