import { loadSchema } from '@graphql-tools/load';
import { makeExecutableSchema } from '@graphql-tools/schema/makeExecutableSchema';
import { stitchSchemas } from '@graphql-tools/stitch';
import { UrlLoader } from '@graphql-tools/url-loader';

export const remoteSchema = await loadSchema('./type-defs.graphql', {
  loaders: [new UrlLoader()],
});

const remoteSubSchema = {
  schema: makeExecutableSchema({ typeDefs: await remoteSchema }),
};

export const gatewaySchema = stitchSchemas({
  subschemas: [],
});
