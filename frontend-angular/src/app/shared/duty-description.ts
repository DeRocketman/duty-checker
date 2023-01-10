import {Duty} from "./duty";
import {Place} from "./place";

export interface DutyDescription {
  id?: string,
  startTime?: string,
  endTime?: string,
  duration?: string,
  fromPlace?: Place,
  toPlace?: Place,
  type?: string,
  annotation?: string,
  duty?:Duty
}
