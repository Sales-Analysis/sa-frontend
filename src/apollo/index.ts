import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { mocks, resolvers } from 'apollo/mocks';
import { schema } from 'apollo/schemas';

const cache = new InMemoryCache({});

const schemaWithMocks = addMocksToSchema({
  schema,
  mocks,
  resolvers,
});

export const client = new ApolloClient({
  uri: '/api',
  cache,
  link: new SchemaLink({ schema: schemaWithMocks }),
});
