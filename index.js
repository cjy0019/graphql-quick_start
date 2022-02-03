import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

// schema
// 무엇을 받을 지 무엇을 던질건지
const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

server.start(() => console.log('Graphql server running'));
