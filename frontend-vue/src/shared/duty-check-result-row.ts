import {RouteKnowledge} from "./route-knowledge";

export interface DutyCheckResultRow {
  dutyName: string,
  regularStart: string,
  regularEnd: string,
  regularLength: string,
  newDutyStart: string,
  startDeviation: string,
  newDutyEnd: string,
  endDeviation: string,
  newLength: string,
  period: string,
  newRouteKnowledges?: RouteKnowledge[],
  foundErrors?: number;
  dutyErrors: String[];
}
