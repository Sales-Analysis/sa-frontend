import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
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
  link: 1 ? new HttpLink({ uri: '/api' }) : new SchemaLink({ schema: schemaWithMocks }),
  cache,
});
