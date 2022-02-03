import { getById, getMovies, addMovie, deleteMovie } from '../db/db';
// import { getById, people } from '../db/db';

const resolvers = {
  // Query: {
  //   people: () => people,
  //   person: (_, args) => getById(args.id),
  // },
  Query: {
    movies: () => getMovies(),
    movie: (_, args) => getById(args.id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
