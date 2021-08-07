import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import faker from 'faker';
import { loader } from 'graphql.macro';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {},
  },
});

const typeDefs = loader('./server.schema.graphql');
const schema = makeExecutableSchema({ typeDefs });
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks: {
    FAQ: () => ({
      id: faker.datatype.number(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(3),
    }),
  },
});
export const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache,
  link: new SchemaLink({ schema: schemaWithMocks }),
});
