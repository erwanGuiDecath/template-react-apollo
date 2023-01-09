import { GraphQLScalarType } from 'graphql';
import { Container, Resolvers } from '../../types/common.types';

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

  Container: {
    __resolveType(container: Container) {
      switch (container.type) {
        case 'COMPONENTS': return 'ContainerComponents'
        case 'LAYOUT': return 'ContainerLayout'
        case 'TEMPLATE': return 'ContainerTemplate'
        default: throw new Error('Impossible to have a empty type on Container');
      }
    }
  }
};
