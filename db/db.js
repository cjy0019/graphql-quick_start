// export const people = [
//   {
//     id: 0,
//     name: 'Leo Messi',
//     age: 34,
//     gender: 'male',
//   },
//   {
//     id: 1,
//     name: 'Cristiano Ronaldo',
//     age: 34,
//     gender: 'male',
//   },
//   {
//     id: 2,
//     name: 'Son HeungMin',
//     age: 31,
//     gender: 'male',
//   },
//   {
//     id: 3,
//     name: 'Park JiSung',
//     age: 34,
//     gender: 'male',
//   },
//   {
//     id: 4,
//     name: 'Joe Cole',
//     age: 40,
//     gender: 'male',
//   },
// ];

import fetch from 'node-fetch';

// export const getById = (id) => {
//   const filteredPeople = people.filter((person) => id === person.id);
//   return filteredPeople[0];
// };

// export let movies = [
//   {
//     id: 0,
//     name: 'Thor - Thunder man',
//     score: 11,
//   },
//   {
//     id: 1,
//     name: 'SpiderMan - No Way Home',
//     score: 9,
//   },
//   {
//     id: 2,
//     name: 'The Avengers - End Game',
//     score: 99,
//   },
//   {
//     id: 3,
//     name: 'Black Panther',
//     score: 3,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };

const API_URL = 'https://yts.am/api/v2/list_movies.json';

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
