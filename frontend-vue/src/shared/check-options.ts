import {WeekSetOfRules} from "./week-set-of-rules";

export interface CheckOptions {
  id?: string,
  checkRouteKnowledge?: boolean,
  sendMail?: boolean,
  showResultBeforeSending?: boolean
  checkSignOnOff?: boolean,
  checkContentTime?: boolean,
  checkTravelTime?: boolean,
  checkInspectionDoc?: boolean,
  checkGap?: boolean,
  checkWorkingTime?: boolean,
  checkPlaceUse?: boolean,
  defaultWeekSet?: WeekSetOfRules,
}
