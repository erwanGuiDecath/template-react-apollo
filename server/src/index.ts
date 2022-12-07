import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { BeersAPI } from './api/beers/beers.api';
import { beersResolver, beersSchema } from './schemas';
import { AppContext } from './types/common.types';

const server = new ApolloServer<AppContext>({
  typeDefs: beersSchema,
  resolvers: beersResolver,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      dataSources: {
        beersAPI: new BeersAPI(),
      },
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);
