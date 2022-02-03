const Messi = {
  name: 'Leo Messi',
  age: 34,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => Messi,
  },
};

export default resolvers;
