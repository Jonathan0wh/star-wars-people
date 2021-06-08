import { Film } from "./generated/film-api.generated";
import { People } from "./generated/people-api.generated";

export interface GetPeopleResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: Array<People>;
}

export type GetFilmResponse = Film;
