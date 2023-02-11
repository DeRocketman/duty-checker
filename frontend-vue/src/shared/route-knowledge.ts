import {Place} from "./place";

export interface RouteKnowledge {
  id?: string,
  name?: string,
  startPlace?: Place,
  endPlace?: Place
}
