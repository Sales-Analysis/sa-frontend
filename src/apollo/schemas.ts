import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema';
import { loader } from 'graphql.macro';

// export const serverSchemaDefs = await loadSchema('./server.schema.graphql', {
//   loaders: [new GraphQLFileLoader()],
// });

// const schema2 = loadSchemaSync('http://localhost:3000/api', {
//   loaders: [new UrlLoader()],
// });

export const schema = makeExecutableSchema({
  typeDefs: mergeSchemas({
    typeDefs: [loader('./mocked.schema.graphql'), loader('./server.schema.graphql')],
  }),
});
