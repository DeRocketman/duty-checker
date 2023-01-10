import {RouteKnowledge} from "./route-knowledge";

export interface Department {
  id?: string,
  name?: string,
  dutyDescriptionName?: string
  standardRouteKnowledges?: RouteKnowledge[];
}
