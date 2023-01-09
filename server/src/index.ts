import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { BeersAPI, PageBuilderAPI, StrapiAPI } from './api';
import { typeDefs, resolvers } from './schemas';
import { AppContext } from './types/common.types';

const server = new ApolloServer<AppContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      dataSources: {
        beersAPI: new BeersAPI(),
        pageBuilderAPI: new PageBuilderAPI(),
        strapiAPI: new StrapiAPI(),
      },
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);
