import { getById, getMovies, addMovie, deleteMovie } from '../db/db';
// import { getById, people } from '../db/db';

const resolvers = {
  // Query: {
  //   people: () => people,
  //   person: (_, args) => getById(args.id),
  // },
  // Query: {
  //   movies: () => getMovies(),
  //   movie: (_, args) => getById(args.id),
  // },
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
