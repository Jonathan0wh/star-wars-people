import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetFilmResponse, GetPeopleResponse } from "types/API";
import { Film, People } from "types/API/api";

export const swApi = createApi({
  reducerPath: "swApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DOMAIN,
  }),

  endpoints: (builder) => ({
    // queries and mutations
    getPeople: builder.query<People, number>({
      query: (page = 1) => `people?page=${page}`,
      transformResponse: (response: GetPeopleResponse) => ({
        ...response,
        results: response.results.map(
          ({ name, height, mass, birth_year, gender, films }) => ({
            name,
            height,
            mass,
            birth_year,
            gender,
            films,
          })
        ),
      }),
    }),

    getFilm: builder.query<Film, string>({
      query: (id) => `films/${id}`,
      transformResponse: ({ title, opening_crawl }: GetFilmResponse) => ({
        title,
        opening_crawl,
      }),
    }),
  }),
});

export const { useGetPeopleQuery, useGetFilmQuery } = swApi;
