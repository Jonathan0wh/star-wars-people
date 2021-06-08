import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetFilmResponse, GetPeopleResponse } from "types/API";

export const swApi = createApi({
  reducerPath: "swApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DOMAIN,
  }),
  endpoints: (builder) => ({
    getPeople: builder.query<GetPeopleResponse, number>({
      query: (page = 1) => `people?page=${page}`,
    }),
    getFilm: builder.query<GetFilmResponse, number>({
      query: (id) => `films/${id}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetFilmQuery } = swApi;
