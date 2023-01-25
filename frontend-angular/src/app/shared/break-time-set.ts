import {BreakTimeRule} from "./break-time-rule";

export interface BreakTimeSet {
  id?: string,
  shortBreakTimeMin?: string,
  shortBreakTimeMax?: string,
  shortBreakCount?: number,
  breakTimeMin?: string,
  breakTimeMax?:string,
  startMainBreakLocation?: number,
  endMainBreakLocation?: number,
  breakTimeRules?: BreakTimeRule[]
}
