import {DutyDescription} from "./duty-description";

export interface Duty {
  id?: string,
  name?: string,
  periodStart?: string,
  periodEnd?: string,
  startTime?: string,
  endTime?: string,
  breakTime?: string,
  payedTime?: string,
  totalTime?: string,
  descriptions?: DutyDescription[]
}
