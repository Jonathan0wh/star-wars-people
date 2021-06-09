import { Film as ResponseFilmType } from "./generated/film-api.generated";
import { People as ResponsePeopleType } from "./generated/people-api.generated";

export interface GetPeopleResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: Array<ResponsePeopleType>;
}

export interface People {
  count: number;
  previous: string | null;
  next: string | null;
  results: Array<
    Pick<
      ResponsePeopleType,
      "name" | "height" | "mass" | "birth_year" | "gender" | "films"
    >
  >;
}

export type GetFilmResponse = ResponseFilmType;

export type Film = Pick<ResponseFilmType, "title" | "opening_crawl">;
