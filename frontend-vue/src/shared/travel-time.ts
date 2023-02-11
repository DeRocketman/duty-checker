import {Place} from "./place";

export interface TravelTime {
  id?: string,
  startPoint?: Place,
  endPoint?: Place,
  duration?: string,
  type?: string,
  oppoDirectionEquals?: boolean
}
