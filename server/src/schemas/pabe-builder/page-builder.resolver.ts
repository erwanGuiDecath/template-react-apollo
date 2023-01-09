import { GraphQLScalarType } from 'graphql';
import { Resolvers } from '../../types/common.types';

const jsonScalar = new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON custom scalar type',
  serialize(value: Object) {
    return value
  },
  parseValue(value: string) {
    return JSON.parse(value);
  },
});

export const pageBuilderResolver: Resolvers = {
  jsonScalar,
  Query: {
    
  },
};
