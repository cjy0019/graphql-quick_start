import { getById, people } from '../db/db';

const resolvers = {
  Query: {
    people: () => people,
    person: (_, args) => getById(args.id),
  },
};

export default resolvers;
