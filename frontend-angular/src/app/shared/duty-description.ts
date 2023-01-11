import {Duty} from "./duty";
import {Place} from "./place";
import {DutyElement} from "./duty-element";

export interface DutyDescription {
  id?: string,
  startTime?: string,
  endTime?: string,
  duration?: string,
  fromPlace?: Place,
  toPlace?: Place,
  type?: DutyElement,
  annotation?: string,
}
