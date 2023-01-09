import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { beersResolver, beersSchema } from './beers';
import { pageBuilderResolver, pageBuilderSchema } from './pabe-builder';

export const typeDefs = mergeTypeDefs([
  beersSchema,
  pageBuilderSchema
])

export const resolvers = mergeResolvers([
  beersResolver,
  pageBuilderResolver
])