/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A Star Wars film
 */
export interface Film {
  /**
   * The starship resources featured within this film.
   */
  starships: unknown[];
  /**
   * the ISO 8601 date format of the time that this resource was edited.
   */
  edited: string;
  /**
   * The planet resources featured within this film.
   */
  planets: unknown[];
  /**
   * The producer(s) of this film.
   */
  producer: string;
  /**
   * The title of this film.
   */
  title: string;
  /**
   * The url of this resource
   */
  url: string;
  /**
   * The release date at original creator country.
   */
  release_date: string;
  /**
   * The vehicle resources featured within this film.
   */
  vehicles: unknown[];
  /**
   * The episode number of this film.
   */
  episode_id: number;
  /**
   * The director of this film.
   */
  director: string;
  /**
   * The ISO 8601 date format of the time that this resource was created.
   */
  created: string;
  /**
   * The opening crawl text at the beginning of this film.
   */
  opening_crawl: string;
  /**
   * The people resources featured within this film.
   */
  characters: unknown[];
  /**
   * The species resources featured within this film.
   */
  species: unknown[];
  [k: string]: unknown;
}
